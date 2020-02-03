import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class QuestionList extends Component {
    id = 1
    state = {
        fetching: false,
        questionlist:[   
            {
            author_name: null,
            title: null,
            date: null,
            image: null,
            }  
        ],
        keyword:''
    }

    fetchQuestionInfo = async(page_num) => { 
        this.setState({
            fetching:true
        })

        const questionlistinfo = await service.getQeustionList(page_num);

        const questionlist = questionlistinfo.data.results

        this.setState({
            questionlist,
            fetching:false
        })
        
    }
    
    componentDidMount() {
        this.fetchQuestionInfo(1);
        
    }

   
    render() {
        const question = this.state
        var questionList = question.questionlist;
        console.log(questionList)
        return (
            <div>
                <Content>
                <li>{questionList[0].title}</li>
                <li>{questionList[0].title}</li>
                <li>{questionList[0].title}</li>
                <li>{questionList[0].title}</li>
                </Content>
            </div>
        );
    }
}



export default QuestionList;