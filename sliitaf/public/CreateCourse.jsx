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
        this.onChangeyear = this.onChangeyear.bind(this);
        this.onChangesemester = this. onChangesemester.bind(this);
        this.onChangemodule = this.onChangemodule.bind(this);
        this.onChangeinstructor = this.onChangeinstructor.bind(this);
        this.onChangeenroll = this. onChangeenroll.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            faculty: '',
            year: '',
            semester: '',
            module_name: '',
            instructor: '',
            enroll: ''
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

    onChangeyear(e) {
        this.setState({
            year: e.target.value
        });
    }

    onChangesemester(e){
        this.setState({
            semester: e.target.value});
    }

    onChangemodule(e){
        this.setState({
            module_name: e.target.value});
    }

    onChangeinstructor(e){
        this.setState({
            instructor: e.target.value});
    }

    onChangeenroll(e){
        this.setState({
            enroll: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newcourse={
            faculty:this.state.faculty,
            year:this.state.year,
            semester:this.state.semester,
            module_name:this.state.module_name,
            instructor:this.state.instructor,
            enroll:this.state.enroll
        }
        axios.post('http://localhost:8083/course/add',newcourse).then(res=>console.log(res.data));
        this.setState({
            faculty: '',
            year: '',
            semester: '',
            module_name: '',
            instructor: '',
            enroll: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>New Course</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
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
                            <h6>Year</h6>
                            <div className="form-group">
                                <div className="form-check form-check-inline">

                                    <input className="form-check-input"
                                           type="radio"
                                           name="year"
                                           id="year1"
                                           value="1st"
                                           checked={this.state.year === "1st"}
                                           onChange={this.onChangeyear}/>
                                    <label className="form-check-label">1st Year</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="year"
                                           id="year2"
                                           value="2nd"
                                           checked={this.state.year === "2nd"}
                                           onChange={this.onChangeyear}/>
                                    <label className="form-check-label">2nd Year</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="year"
                                           id="year3"
                                           value="3rd"
                                           checked={this.state.year === "3rd"}
                                           onChange={this.onChangeyear}/>
                                    <label className="form-check-label">3rd Year</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="year"
                                           id="year4"
                                           value="4th"
                                           checked={this.state.year === "4th"}
                                           onChange={this.onChangeyear}/>
                                    <label className="form-check-label">4th Year</label>
                                </div>
                            </div>
                            <h6>Semester</h6>
                            <div className="form-group">
                                <div className="form-check form-check-inline">

                                    <input className="form-check-input"
                                           type="radio"
                                           name="semester"
                                           id="semester1"
                                           value="1st"
                                           checked={this.state.semester === "1st"}
                                           onChange={this.onChangesemester}/>
                                    <label className="form-check-label">1st Semester</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="semester"
                                           id="semester2"
                                           value="2nd"
                                           checked={this.state.semester === "2nd"}
                                           onChange={this.onChangesemester}/>
                                    <label className="form-check-label">2nd Semester</label>
                                </div>

                            </div>
                            <h6>Module Name</h6>
                            <input type="text" className="form-control" value={this.state.module_name} onChange={this.onChangemodule}/><br/>
                            <h6>Instructor Name</h6>
                            <input type="text" className="form-control" value={this.state.instructor} onChange={this.onChangeinstructor}/><br/>
                            <h6>Enrollment Key</h6>
                            <input type="text" className="form-control" value={this.state.enroll} onChange={this.onChangeenroll}/><br/>
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