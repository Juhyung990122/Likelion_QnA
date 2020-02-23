import React,{Component} from 'react';
import { Link } from 'react-router';
import Content from '../components/Content';
import * as service from '../qna';
import '../components/containers_css/Question.css';


const DetailItem = ({active, children, to}) => (
    <Link to={to} className="detail-item">
            {children}
    </Link>
)


class QuestionList extends Component {
    
    constructor(props){
        super(props);
        this.state = {

            page_num : 1,
            fetching: false,
            questionlist:[   
                {
                    pk: null,
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                },  
                {   
                    pk: null,
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                },
                {   
                    pk: null,
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                }, 
                {   
                    pk: null,
                    author_name: null,
                    title: null,
                    date: null,
                    image: null,
                }, 
                {   
                    pk: null,
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

   detail(){
       const postobject = this.fetchQuestionInfo(this.state.questionlist.filter())
   }
    

    render() {
        const question = this.state
        var questionList = question.questionlist;
        return (
            <div>
                <Content>
                    <div className='question_photo'>

                    </div>
                    <div className='page_title'>
                    </div>
                    <div>
                    <button id='create_button'>질문하기</button>
                    </div>
                    
                    <div className='table'>
                    <table border='1'>
                        <thead>
                        <tr>
                        <td>글쓴이</td><td>제목</td><td>등록일</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>{questionList[0].author_name}</td><td><DetailItem to={'question/:id'}>{questionList[0].title}</DetailItem></td><td>{questionList[0].date}</td>
                        </tr>
                        <tr>
                        <td>{questionList[1].author_name}</td><td><DetailItem to={'question/:id'}>{questionList[1].title}</DetailItem></td><td>{questionList[1].date}</td>
                        </tr>
                        <tr>
                        <td>{questionList[2].author_name}</td><td><DetailItem to={'question/:id'}>{questionList[2].title}</DetailItem></td><td>{questionList[2].date}</td>
                        </tr>
                        <tr>
                        <td>{questionList[3].author_name}</td><td><DetailItem to={'question/:id'}>{questionList[3].title}</DetailItem></td><td>{questionList[3].date}</td>
                        </tr>
                        <tr>
                        <td>{questionList[4].author_name}</td><td><DetailItem to={'question/:id'}>{questionList[4].title}</DetailItem></td><td>{questionList[4].date}</td>
                        </tr>
                        </tbody>
                       

                    </table>
                    </div>
                    <div className='pagination'>
                    <button id='prevbutton'onClick={this.prevpage}>Prev</button>
                    <button id='nextbutton'onClick={this.nextpage}>Next</button>
                    </div>
                    
                </Content>
            </div>
        );
    }
}



export default QuestionList;