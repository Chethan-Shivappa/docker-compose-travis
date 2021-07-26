import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!
          <br />
          Added this new lines after binding the volume
          to the dir in host-machine
          <br />
          Added after creating docker-compose file.
        </a>
      </header>
    </div>
  );
}

export default App;
