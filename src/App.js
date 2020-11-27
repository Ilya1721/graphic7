import React from "react";
import "./css/main.css";
import InputData from "./components/InputData";
import OutputData from "./components/OutputData";

class App extends React.Component {
  firstTask = {
    n1: 119,
    n2: 205,
    n12: 43,
  };

  secondTask = {
    p1: 0.311,
    p2: 0.288,
    p3: 0.247,
    p4: 0.186,
    p5: 0.114,
  };

  thirdTask = {
    c: 6.93,
    l: 0.0144,
  };

  fourthTask = {
    o: 67.4,
    c: 5.5,
    l: 0.93,
  };

  render() {
    return (
      <div className="app">
        <InputData
          firstTask={this.firstTask}
          secondTask={this.secondTask}
          thirdTask={this.thirdTask}
          fourthTask={this.fourthTask}
        />
        <OutputData
          firstTask={this.firstTask}
          secondTask={this.secondTask}
          thirdTask={this.thirdTask}
          fourthTask={this.fourthTask}
        />
      </div>
    );
  }
}

export default App;
