import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { value: ""};
   //this.addItem = new ItemService();

    this.change = this.change.bind(this);
    this.handle = this.handle.bind(this);//dashboard.handle 
}

//functions
change(event){
    this.setState({ value: event.target.value});
}

handle(event){
    event.preventDefault();
    this.setState({ value: event.target.value});
    
    this.addItem.sendData(this.state.value);
    this.props.history.push('/');
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">everybody loves chores</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.handle}>
          <label>
            Username:
            
            <input type="text" value={this.state.value} onChange={this.change} className="form-control"/>
          </label><br/>
          <label> Password:
          <input type="text" value={this.state.value} onChange={this.change} className="form-control"/>
          </label>< br/>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
        
      </div>
    );
  }
}

export default App;
