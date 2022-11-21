import './App.css';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function Clock(props) {
  return <h5> It is {props.time}.</h5>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            <Welcome name="Hero" />
          </div>
      </header>
      <footer className="App-footer">
          <div>
            <Clock time={new Date().toLocaleTimeString()} />
          </div>
      </footer>
    </div>
  );
}

export default App;
