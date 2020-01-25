import axios from 'axios'

export function getQeustion(question_id){
    return axios.get('https://likelionqnabackend.herokuapp.com/qna/question/'+question_id);
}

export function getAnswer(question_num){
    return axios.get('http://likelionqnabackend.herokuapp.com/qna/answer_list/'+question_num);
}