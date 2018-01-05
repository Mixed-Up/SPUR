import React, { Component } from 'react';
import CSS from '../index.css';


class Challenges extends Component {
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

          </div>
        )}}


export default Challenges; 
