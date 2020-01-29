import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';


class QuestionList extends Component {
    id = 1
    state = {
        fetching: false,
        questionlist:[    
            
        ]

    }

    fetchQuestionInfo = async(page_num) => { 
        this.setState({
            fetching:true
        })

        const questionlistinfo = await service.getQeustionList(page_num);

        this.setState({
            questionlist: questionlistinfo.data.results,
            fetching:false
        })
        const questionlist2 = await service.getQeustionList(page_num);
        console.log(questionlist2);
    }
    
    componentDidMount() {
        this.fetchQuestionInfo(1);
        
    }
    
    render() {
        return (
            <div>
                <Content>            
                    
  
                </Content>
            </div>
        );
    }
}



export default QuestionList;