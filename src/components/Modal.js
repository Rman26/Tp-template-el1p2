import React from 'react';
import './Modal.css';
export default function Modal(props) {
    return (
        <div className='Modal'
            style={{
                transform: props.interface ? 'translateY(0vh' : 'translatey-100vh',
                opacity: props.interface ? '1' : '0'
            }}

        >
            <button onClick={props.hide} style={{float:'right'}}>x</button>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Position</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" placeholder="Enter your age"/>
                </div>
                <div class="form-group">
                    <label>Office</label>
                    <input type="text" class="form-control" placeholder="entre your office"/>
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Salary</label>
                    <input type="text" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}