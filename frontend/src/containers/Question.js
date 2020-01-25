import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class Question extends Component {

    fetchQuestionInfo = async(question_id) => {
        const question = await service.getQeustion(question_id);
        console.log(question);
    }
    
    componentDidMount() {
        this.fetchQuestionInfo(1);
    }
    
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