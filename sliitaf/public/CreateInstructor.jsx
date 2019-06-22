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
        this.onChangeinstructor_name = this.onChangeinstructor_name.bind(this);
        this.onChangeinstructor_empno = this. onChangeinstructor_empno.bind(this);
        this.onChangeinstructor_email = this.onChangeinstructor_email.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            faculty: '',
            instructor_name: '',
            instructor_empno: '',
            instructor_email:''
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

    onChangeinstructor_name(e) {
        this.setState({
            instructor_name: e.target.value
        });
    }

    onChangeinstructor_empno(e){
        this.setState({
            instructor_empno: e.target.value});
    }

    onChangeinstructor_email(e){
        this.setState({
            instructor_email: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newinstructor={
            faculty:this.state.faculty,
            instructor_name:this.state.instructor_name,
            instructor_empno:this.state.instructor_empno,
            instructor_email:this.state.instructor_email
        }
        axios.post('http://localhost:8083/instructor/add',newinstructor).then(res=>console.log(res.data));
        this.setState({
            faculty: '',
            instructor_name: '',
            instructor_empno: '',
            instructor_email:''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>New Instructor</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Instructor Name</h6>
                            <input type="text" className="form-control" value={this.state.instructor_name} onChange={this.onChangeinstructor_name}/><br/>
                            <h6>Employee ID</h6>
                            <input type="text" className="form-control" value={this.state.instructor_empno} onChange={this.onChangeinstructor_empno}/><br/>
                            <h6>Instructor Email</h6>
                            <input type="text" className="form-control" value={this.state.instructor_email} onChange={this.onChangeinstructor_email} required={true}/><br/>
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