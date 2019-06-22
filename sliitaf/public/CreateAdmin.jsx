'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
export default class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.onChangefaculty = this.onChangefaculty.bind(this);
        this.onChangeadmin_name = this.onChangeadmin_name.bind(this);
        this.onChangeadmin_empno = this. onChangeadmin_empno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            faculty: '',
            admin_name: '',
            admin_empno: ''
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

    onChangefaculty(e) {
        this.setState({
            faculty: e.target.value
        });
    }

    onChangeadmin_name(e) {
        this.setState({
            admin_name: e.target.value
        });
    }

    onChangeadmin_empno(e){
        this.setState({
            admin_empno: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newadmin={
            faculty:this.state.faculty,
            admin_name:this.state.admin_name,
            admin_empno:this.state.admin_empno
        }
        axios.post('http://localhost:8083/admin/add',newadmin).then(res=>console.log(res.data));
        this.setState({
            faculty: '',
            admin_name: '',
            admin_empno: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>New Admin</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Admin Name</h6>
                            <input type="text" className="form-control" value={this.state.admin_name} onChange={this.onChangeadmin_name}/><br/>
                            <h6>Employee ID</h6>
                            <input type="text" className="form-control" value={this.state.admin_empno} onChange={this.onChangeadmin_empno}/><br/>
                            <h6>Faculty</h6>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="computing"
                                           value="Computing"
                                           checked={this.state.faculty === "Computing"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Computing</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="business"
                                           value="Business"
                                           checked={this.state.faculty === "Business"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Business</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="engineering"
                                           value="Engineering"
                                           checked={this.state.faculty === "Engineering"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Engineering</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="HumanitiesAndSciences"
                                           value="HumanitiesAndSciences"
                                           checked={this.state.faculty === "HumanitiesAndSciences"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Humanities And Sciences</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Save</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                            {/*<Route exact path="/singup" render={() => {window.location.href="Admin.jsx"}} />*/}
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}