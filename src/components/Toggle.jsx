import { Component } from "react";
import './Toggle.css';

class Toggle extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        }
    }
    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (<>
            <div className="toggle-container">
                <button className={`toggle-btn ${this.state.toggle ? "logout" : "login"}`} onClick={this.handleToggle}>
                    {this.state.toggle ? "Logout" : "Login"}
                </button>
            </div>
        </>)
    }
}
export default Toggle;