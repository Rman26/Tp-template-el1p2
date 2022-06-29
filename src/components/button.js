import './button.css';
import Modal from './Modal.js'
import {Component} from "react";
export default class Button extends Component {

    state = {
        interface: false
    }

    show = () => {
        this.setState({
            interface: true
        })
    }

    hide = () => {
        this.setState({
            interface: false
        })   }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.show}>add</button>
                <Modal
                interface={this.state.interface}
                hide={this.hide}/>
            </div>
        );
    }
}
