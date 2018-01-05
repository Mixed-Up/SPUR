import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard';
import Challenges from './components/Challenges';
import Ok from './components/Ok';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component= {App} />
          <Route path='/dashboard' component= {Dashboard} />
          <Route path='/challenges' component= {Challenges} />
          <Route path='/ok' component= {Ok} />
        </div>
    </Router>,
    document.getElementById('root')
)