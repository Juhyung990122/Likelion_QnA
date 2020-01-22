import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Notice from './containers/Notice';
import Question from './containers/Question';


import './index.css';




ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="question" component={Question}/>
      <Route paht="notice" component={Notice}/>
    </Route>
  </Router>,
  document.getElementById('root')
);