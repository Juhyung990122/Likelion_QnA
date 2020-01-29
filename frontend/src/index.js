import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import Notice from './containers/Notice';
import QuestionList from './containers/Question';

import './index.css';
import Question_detail from './containers/Question_detail';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/notice" component={Notice}/>
      <Route path="/question" component={QuestionList}/>
      <Route path="/question/:id" component={Question_detail}/>
    </Route>
  </Router>,
  document.getElementById('root')
);