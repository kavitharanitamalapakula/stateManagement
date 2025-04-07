import { Component } from "react";
import './Counter.css';
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handleChange = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (<>
            <button className="counter-btn" onClick={this.handleChange}>Counter : {this.state.count}</button>

        </>)
    }
}
export default Counter;