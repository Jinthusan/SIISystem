'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom'
import CreateInstructor from "./AdminJob";
import Login from './Login';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangerole = this.onChangerole.bind(this);
        this.onChangepassword = this. onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            role: '',
            password: ''
        }
        // this.state = {
        //     redirect: false
        // }
        // this.setRedirect = () => {
        //     this.setState({
        //         redirect: true
        //     })
        // }
        // this.renderRedirect = () => {
        //     if (this.state.redirect) {
        //         return <Redirect to='/target' />
        //   onClick={this.setRedirect}
        //     }
        // }
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangerole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onChangepassword(e){
        this.setState({
            password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newuser={
            email:this.state.email,
            role:this.state.role,
            password:this.state.password
        }
        axios.post('http://localhost:8083/user/add',newuser).then(res=>{
            alert('Successfull'+JSON.stringify(res.data));
            if (res)
            {
                console.log(res);
                ReactDOM.render(<Login/>,document.getElementById('root'));
            }
            else
            {
                return res.status(500).json({message: 'Error'});
            }
        });
        this.setState({
            email: '',
            role: '',
            password: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                <form onSubmit={this.onSubmit} id={'root'}>
                    <div className={"form-group"}>
                        <h6>Email</h6>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeemail}/>
                        <h6>Role</h6>
                        <input type="text" className="form-control" value={this.state.role} onChange={this.onChangerole}/>
                        <h6>Password</h6>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangepassword}/><br/>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Signup</button>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                        {/*<Route exact path="/singup" render={() => {window.location.href="Admin.jsx"}} />*/}
                    </div>
                </form>
                </Router>
            </div>
        );
    }

}

