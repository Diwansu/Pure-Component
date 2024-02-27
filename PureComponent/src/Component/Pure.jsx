import  { PureComponent } from "react";

export class Hello extends PureComponent {
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
        {console.log("This is pure Component")}
        <h1>Pure Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.tog}>Toggle</button>
        <button onClick={this.add}>Increment</button>
      </div>
    );
  }
}

export default Hello;
