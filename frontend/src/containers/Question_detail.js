import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';
import '../components/containers_css/Question_detail.css';
       

class Question_detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            question_fetching : false,
            answer_fetching: false,
            question:{
                pk: props.params.id,
                author_name: null,
                title: null,
                date: null,
                content: null,
                image: null,
                views_num: 0
            },
            answer:{
                question_num: props.params.id,
                author_name: null,
                title: null,
                date: null,
                content: null,
                image: null
            }
        };
    }

    fetchQuestionInfo = async(question_id) => {
        this.setState({
            question_fetching:false
        });

        const infoquestion = await service.getQeustion(question_id)
        const question = infoquestion.data

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
            question_fetching:true
        });

    }

    fetchAnswerInfo = async(question_id) => {
        this.setState({
            answer_fetching:false,
        });

        const infoanswer = await service.getAnswer(question_id)

        if(infoanswer.data.length !== 0){
        const  answer= infoanswer.data
        const {
            author_name,
            question_num,
            title,
            date,
            content,
            image,
            } = answer[0];
            
        this.setState({
            answer:{
                author_name,
                question_num,
                title,
                date,
                content,
                image,
            },
            answer_fetching:true
        });
    }
        else{
            this.setState({
                answer_fetching:false
            });
        }
    }

    componentDidMount() {
        this.fetchQuestionInfo(this.state.question.pk)
        this.fetchAnswerInfo(this.state.answer.question_num)
        console.log('fetch')
        
    }

    
    render() {
        const {question} = this.state;
        const {answer} = this.state;
        if(this.state.answer_fetching){
        return (
            <div>
                <Content>
                <div className='question_photo'>
                </div>
                <div className='page_title'>
                </div>
                <div className='question_title'>
                {question.title}
                </div>
                <div className='question_date'>
                {question.date}
                </div>
                <div className='question_image_div'>
                <img src={question.image} id='question_image' ></img>
                </div>
                <div className='question_content'>
                {question.content}
                </div>
                <div className='answer_photo'>
                </div>
                <div className='answer_title'>
                {answer.title}
                </div>
                <div className='answer_date'>
                {answer.date}
                </div>
                <div className='answer_image_div'>
                <img src={answer.image} id='answer_image' ></img>
                </div>
                <div className='answer_content'>
                {answer.content}
                </div>
                <div className='footer'>
                </div>
                </Content>
            </div>
          
        );
        }
        else{
            return(
                <div>
                <Content>
                <div className='question_photo'>
                </div>
                <div className='page_title'>
                </div>
                <div className='question_title'>
                {question.title}
                </div>
                <div className='question_date'>
                {question.date}
                </div>
                <div className='question_image_div'>
                <img src={question.image} id='question_image' ></img>
                </div>
                <div className='question_content'>
                {question.content}
                </div>
                <div className='footer'>
                </div>
                </Content>
            </div>
            )
        }
    }
}

export default Question_detail;