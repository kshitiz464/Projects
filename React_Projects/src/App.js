//App.js
import { Component } from "react";
// import "./styles.css";
// import react from "react";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

    };
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1> {this.state.count}</h1>
          <button
            onClick={() => {
              this.setState((previous) => ({ count: this.state.count + 1 }));
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              this.setState((next) => ({ count: this.state.count - 1 }));
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              this.setState((reset) => ({ count: 0 }));
            }}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
