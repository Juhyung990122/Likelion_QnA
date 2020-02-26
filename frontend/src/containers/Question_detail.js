import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';
import { Redirect } from 'react-router';
       

class Question_detail extends Component {
    constructor(props){
        console.log(props)
        super(props);
        this.state = {
            fetching : false,
            question:{
                pk: props.params.id,
                author_name: null,
                title: null,
                date: null,
                content: null,
                image: null,
                views_num: 0
            }
        };
    }

    fetchQuestionInfo = async(question_id) => {
        this.setState({
            fetching:true
        });
        
        const info = await service.getQeustion(question_id)
        const question = info.data

        const {
            pk,
            author_name,
            title,
            date,
            content,
            image,
            views_num} = question; 

        this.setState({
            question:{
                pk,
                author_name,
                title,
                date,
                content,
                image,
                views_num
            },
            fetching:false
        });

    }


    componentDidMount() {
        this.fetchQuestionInfo(this.state.question.pk)
    }

    
    render() {
        const {question} = this.state;

        return (
            <div>
                <Content>
                {question.title}
                {question.content}
                </Content>
            </div>
          
        );
    }
}

export default Question_detail;