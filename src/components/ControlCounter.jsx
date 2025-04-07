import { Component } from "react";
import './ControlCounter.css';

class ControlCounter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    handleIncrement = () => {
        if (this.state.counter < 10) {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    handleReset = () => {
        this.setState({ counter: 0 })
    }
    handleDecrement = () => {
        if (this.state.counter >= 1) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    render() {
        return (<>
            <div className="control-counter">
                <button className="counter-display">Counter : {this.state.counter}</button>
                <div className="controls">
                    <button className="control-btn" onClick={this.handleIncrement}><i>+</i></button>
                    <button className="control-btn reset-btn" onClick={this.handleReset}><i>↻</i></button>
                    <button className="control-btn" onClick={this.handleDecrement}><i>-</i></button>
                </div>
            </div>
        </>)
    }

}
export default ControlCounter;