'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import Admin from './AdminJob';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this. onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangepassword(e){
        this.setState({
            password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        axios.get('http://localhost:8083/slogin/email/password').then(res=>{
            if (res)
            {
                // alert('Welcome to the Smart Student Instructor System!');
                console.log(res);
                ReactDOM.render(<Admin/>,document.getElementById('root2'));
            }
            else
            {
                alert('Registration is failed!');
                ReactDOM.render(<Login/>,document.getElementById('root'));
            }
        });
        this.setState({
            email: '',
            password: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <form onSubmit={this.onSubmit} id={'root2'}>
                        <div className={"form-group"}>
                            <h6>Email</h6>
                            <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeemail}/>
                            <h6>Password</h6>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangepassword}/><br/>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Login</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Cancel</button>
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}