//addditem

import React, { Component } from 'react';
import addItem from './ItemService';

class Dashboard extends Component {
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
      <div className="container">
        <form onSubmit={this.handle}>
          <label>
            Add Item:
            <input type="text" value={this.state.value} onChange={this.change} className="form-control"/>
          </label><br/>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
    </div>
    );
  }
}


export default Dashboard; 


//props pass data into the components
