import React from 'react';
import logo from './js-for-wp-logo.png';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <h1>
          Listing of Posts
        </h1>
        <div id="posts">

        <Posts/>

        </div>
      </header>

    </div>
  );
}

export default App;
