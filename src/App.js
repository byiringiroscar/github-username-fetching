
import React from 'react';
import './App.css';
import axios from 'axios';

const Header = () => (
  <div className='header'>
        <h2>Github Cards app</h2>
      </div>
)

class Form extends React.Component {
  state = { userName: ''}
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ userName: event.target.value })
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmittedData(resp.data);
    this.setState({ userName: '' })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='Github username' onChange={this.handleChange} value={this.state.userName} required />
          <button>Add Card</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render(){
    const profile = this.props;
    return (
      <div className='card'>
        <img src={profile.avatar_url} alt='profile_picture' />
        <div className='card-desc'>
        <h4>Name: {profile.name}</h4>
        <h4>Company: {profile.company}</h4>
        </div>
      </div>
    );
  }
}

const CardList = (props) => (
  <div className='card-list'>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class App extends React.Component{
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render(){
    return (
      <div className='container'>
        <Header />
        <Form onSubmittedData={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
        
      </div>
    );
  }
}

export default App;
