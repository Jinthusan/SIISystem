'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
export default class UpdateAssignment extends Component {
    constructor(props) {
        super(props);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeComments = this. onChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            duedate: '',
            file: '',
            comments: ''
        }
    }

  //  componentDidMount() {
    //    axios.get('http://localhost:8083/assignment/'+this.props.match.params.duedate)
      //      .then(response => {
//
  //              for (var assignments of response.data) {this.setState({
//
  //                  duedate: assignments.duedate,
    //                file: assignments.file,
  //                  comments: assignments.comments
//
    //            })
      //          }
//
  //          })
    //        .catch(function (error) {
      //          console.log(error);
        //    })
    //}





    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        });
    }

    onChangeComments(e){
        this.setState({
            comments: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const newassignment={
            duedate:this.state.duedate,
            file:this.state.file,
            comments:this.state.comments
        };
        console.log(newassignment);
       //axios.put('http://localhost:8083/assignment/'+this.state.duedate, newassignment)
         //  .then(res=>console.log(res.data))
           //.catch(function (err) {
             //  console.log(err);
           //})


    }

    render() {
        return (
            <div style={{"marginTop": 20}}>

                    <h4>Update Assignment</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Due Date</h6>
                            <input type="date" className="form-control" value={this.state.duedate} onChange={this.onChangeDuedate} required={true}/><br/>
                            <h6>Assignment File</h6>
                            <input type="file" className="form-control" value={this.state.file} onChange={this.onChangeFile} required={true}/><br/>
                            <h6>Submission Comments</h6>
                            <input type="text" className="form-control" value={this.state.comments} onChange={this.onChangeComments}/><br/>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Update</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                            {/*<Route exact path="/singup" render={() => {window.location.href="Admin.jsx"}} />*/}
                        </div>
                    </form>


            </div>
        );
    }
}