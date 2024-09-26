import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
      <h1>Anmäl till Danslektion</h1>
      <form>
        <div>
          <label>Namn</label>
          <input type="text"/>
        </div>
        <div>
          <label>Email</label>
          <input type="text"/>
        </div>
        <div>
          <label>Age</label>
          <input type="number"/>
        </div>
        <button>Skicka</button>
      </form>
    </div>
  );
}

export default App;
