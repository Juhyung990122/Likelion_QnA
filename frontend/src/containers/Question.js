import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class QuestionList extends Component {
    id = 1
    state = {
        fetching: false,
        questionlist:[     
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

        return (
            <div>
                <Content>   
                    
                    <li>{JSON.stringify(question.questionlist)}</li>
                </Content>
            </div>
        );
    }
}



export default QuestionList;