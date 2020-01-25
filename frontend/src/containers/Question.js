import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class Question extends Component {
    
    constructor(props){
        super();
        this.state = {
            pk: 1,
            fetching : false,
            question:{
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
        
        const info = await Promise.all([
            service.getQeustion(question_id)
        ]);

        const {
            pk,
            author_name,
            title,
            date,
            content,
            image,
            views_num} = info[0].data; 

        this.setState({
            pk,
            question:{
                author_name,
                title,
                date,
                content,
                image,
                views_num
            },
            fetching:false
        });

        const question = await service.getQeustion(question_id);
        console.log(question);
    }
    
    componentDidMount() {
        this.fetchQuestionInfo(3);
    }
    
    render() {
        const {question} = this.state
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

export default Question;