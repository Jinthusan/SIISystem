import React,{Component} from 'react';
import axios from 'axios';

const Assignments = (props)=>(
    <tr>
        <td>{props.ass.duedate}</td>
        <td>{props.ass.file}</td>
        <td>Select File</td>
    </tr>
);

export default class StudentViewAssignments extends Component {
    constructor(props){
        super(props);
        this.state={assignments:[]}
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/book/all').then((req,res)=>{
        //     console.log(res.data);
        //     res.send(res.data);
        // });
        this.getdata()

    }
    getdata(){
        axios.get('assignment/all')
            .then(data => {// <== Change is her
                console.log(data.data);
                this.state.assignments.push(data.data);
            })
    }


    assignmentList()
    {
        return this.state.assignments.map((current,i)=>{
            return <Assignments ass = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Assignments List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Due Date</th>
                        <th>File Name</th>
                        <th>Submission</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.assignmentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}