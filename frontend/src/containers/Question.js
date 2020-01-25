import React,{Component} from 'react';
import Content from '../components/Content'
import axios from 'axios'

export function getQuestionList(id){
    return axios.get('https://likelionqnabackend.herokuapp.com/qna/question/'+id)
}


class Question extends Component {
    render() {
        return (
            <div>
                <Content>
                question
                </Content>
            </div>
        );
    }
}

export default Question;