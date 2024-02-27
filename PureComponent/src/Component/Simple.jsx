import  { Component } from "react";

export class simple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: false,
    };
  }

  add = () => {
    if (this.state.toggle) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
  };

  tog = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div>
        {console.log("This is simple Component")}
        <h1>Simple Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.tog}>Toggle</button>
        <button onClick={this.add}>Increment</button>
      </div>
    );
  }
}

export default simple;
