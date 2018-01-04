import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component= {App} />
          <Route path='/dashboard' component= {Dashboard} />
          
        </div>
    </Router>,
    document.getElementById('root')
)