import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class Question extends Component {
    
    state = {
        questions : []
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/qna/question/?page=1');
            const question = await res.json();
            this.setState({
                question
            });
        } catch (e) {
            console.log(e);
        }
    }
    
    render() {
        const {question} = this.state
        return (
            <div>
                
                
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}

 
            </div>
        );
    }
}

export default Question;