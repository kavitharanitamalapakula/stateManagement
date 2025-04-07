import { Component } from "react";
import './Dropdown.css';

class Dropdown extends Component {
    constructor() {
        super()
        this.state = {
            selectGender: 'Select'
        }
    }
    handleChange = (e) => {
        this.setState({ selectGender: e.target.value })
    }
    render() {
        return (<>
            <div className="dropdown-container">
                <h3 className="dropdown-title">Selected Gender : {this.state.selectGender}</h3>
            <select className="dropdown-select" name="Gender" onChange={this.handleChange}>
                <option className="dropdown-option" value="select">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            </div>
        </>)
    }
}
export default Dropdown;