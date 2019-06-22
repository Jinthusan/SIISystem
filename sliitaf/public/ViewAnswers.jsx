import React,{Component} from 'react';
import axios from 'axios';

const Answers = (props)=>(
    <tr>
        <td>{props.asw.file}</td>
        <td>Marks</td>
    </tr>
);

export default class ViewAnswers extends Component {
    constructor(props){
        super(props);
        this.state={answers:[]}
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
                this.state.answers.push(data.data);
            })
    }


    answersList()
    {
        return this.state.answers.map((current,i)=>{
            return <Answers asw = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Answers List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Marking</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.answersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}