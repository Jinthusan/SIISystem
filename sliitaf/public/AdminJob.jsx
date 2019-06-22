import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateCourse from './CreateCourse';
import CreateAdmin from './CreateAdmin'
import CreateInstructor from './CreateInstructor'
export default class AdminJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return <div style={{"marginTop": 20}}>
            <br/>
            <Router>
                <div>
                    <div>
                        <div>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/course">New Course</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/admin">New Admin</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/instructor">New Instructor</Link></button>
                        </div>
                    </div>
                    <Route exact path="/course" render={props => {
                        return <CreateCourse/>
                    }}/>
                    <Route exact path="/admin" render={props => {
                        return <CreateAdmin/>
                    }}/>
                    <Route exact path="/instructor" render={props => {
                        return <CreateInstructor/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
