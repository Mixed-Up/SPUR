import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import facebook from './facebook.png';
import { Jumbotron, Button } from 'reactstrap';
//
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



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

handleClick(event){
    event.preventDefault();
    this.setState({ value: event.target.value});
    
    this.addItem.sendData(this.state.value);
    this.props.history.push('/');
}


  render() {
    return (
      <div className="App">


      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead"> </p>
      </Jumbotron>
      <MuiThemeProvider>
          
          <AppBar
             title="Login"
           />
           
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           
         
         
         </MuiThemeProvider>
                

      </div>
      
    );
  }
  
}

const style = {
  margin: 15,}
export default App;
