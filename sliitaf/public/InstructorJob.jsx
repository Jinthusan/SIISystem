import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateAssignment from './CreateAssignment';
import ViewAssignments from './ViewAssignments'
import ViewAnswers from './ViewAnswers'
import UpdateAssignment from './UpdateAssignment';
import GiveMarks from  './GiveMarks'
export default class InstructorJob extends React.Component {
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
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/assignment">New Assignment</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/viwass">View Assignments</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/viewans">View Answers</Link></button>
                            <Link to="/edit/"/>
                            <Link to="/marks/"/>
                        </div>
                    </div>
                    <Route exact path="/assignment" render={props => {
                        return <CreateAssignment/>
                    }}/>
                    <Route exact path="/viwass" render={props => {
                        return <ViewAssignments/>
                    }}/>
                    <Route exact path="/viewans" render={props => {
                        return <ViewAnswers/>
                    }}/>
                    <Route exact path="/edit/" render={props => {
                        return <UpdateAssignment/>
                    }}/>
                    <Route exact path="/marks/" render={props => {
                        return <GiveMarks/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
