
import React from 'react';
import './App.css';

const Header = () => (
  <div className='header'>
        <h2>Github Cards app</h2>
      </div>
)

class Form extends React.Component {
  render(){
    return (
      <form>
          <input type='text' placeholder='Github username' required />
          <button>Add Card</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render(){
    return (
      <div className='card'>
        <img src='https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png' alt='profile_picture' />
        <div className='card-desc'>
        <h4>Name: Oscar</h4>
        <h4>Company: Koracode</h4>
        </div>
      </div>
    );
  }
}

class CardList extends React.Component {
  render(){
    return (
      <div className='card-list'>
        <Card />
      </div>
    );
  }
}
function App() {
  return (
    <div className='container'>
      <Header />
      <Form />
      <CardList />
      
    </div>
  );
}

export default App;
