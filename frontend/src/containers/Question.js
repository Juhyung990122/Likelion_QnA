import React,{Component} from 'react';
import Content from '../components/Content';
import * as service from '../qna';
import '../components/containers_css/Question.css';


class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            page_num : 1,
            fetching: false,
            questionlist:[   
                {
                author_name: null,
                title: null,
                date: null,
                image: null,
                },  
                {
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                },
                {
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                }, 
                {
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                }, 
                {
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                }  
            ],
        }
        this.nextpage = this.nextpage.bind(this);
        this.prevpage = this.prevpage.bind(this);
    }
    id = 1


    fetchQuestionInfo = async(page_num) => { 
        this.setState({
            fetching:true
        })

        const questionlistinfo = await service.getQeustionList(page_num);

        const questionlist = questionlistinfo.data.results

        this.setState({
            page_num,
            questionlist,
            fetching:false
        })
    }
    
    componentDidMount() {
        this.fetchQuestionInfo(this.state.page_num); 
    }

    nextpage(){
        this.fetchQuestionInfo(this.state.page_num+1); 
    }

    prevpage(){
        if(this.state.page_num <= 1){
            alert("첫페이지입니다.")
        }    
        else{
            this.fetchQuestionInfo(this.state.page_num-1); 
        }
            
    }
   
    render() {
        const question = this.state
        var questionList = question.questionlist;
        return (
            <div>
                <Content>
                    <div className='table'>
                    <table border='1'>
                        <tr >
                        <td>이미지</td><td>제목</td><td>등록일</td>
                        </tr>
                        <tr>
                        <td><img href={questionList[0].image}/></td><td>{questionList[0].title}</td><td>{questionList[0].date}</td>
                        </tr>
                        <tr>
                        <td>이미지</td><td>{questionList[1].title}</td><td>{questionList[1].date}</td>
                        </tr>
                        <tr>
                        <td>이미지</td><td>{questionList[2].title}</td><td>{questionList[2].date}</td>
                        </tr>
                        <tr>
                        <td>이미지</td><td>{questionList[3].title}</td><td>{questionList[3].date}</td>
                        </tr>
                        <tr>
                        <td>이미지</td><td>{questionList[4].title}</td><td>{questionList[4].date}</td>
                        </tr>

                    </table>
                    </div>
                    <div className='pagination'>
                    <button onClick={this.prevpage}>Prev</button>
                    <button onClick={this.nextpage}>Next</button>
                    </div>
                    
                </Content>
            </div>
        );
    }
}



export default QuestionList;