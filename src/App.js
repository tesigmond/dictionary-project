import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="cake" />
        </main>

        <footer className="App-footer">
          This website is coded by Tory Sigmond and is{" "}
          <a
            href="https://github.com/tesigmond/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
