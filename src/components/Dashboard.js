//addditem
import { FlexContainer, FlexChild } from 'react-boxes/flex'
import React, { Component } from 'react';
import CSS from '../index.css';
import Grid from 'react-css-grid';
import styled, { css } from 'styled-components';
//import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//mport React from 'react';
//import styled from 'styled-components';

const Button = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: black;
color: palevioletred;
border: 2px solid palevioletred;

${props => props.primary && css`
  background: palevioletred;
  color: white;
`}
`;


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
  <div>
          
          <Grid
        width={320}
        gap={10}>
        <div className="battle">ON GOING BATTLES</div>
        <div className="battle">SCORE FEED</div>
        <div className="battle">CHALLENGES</div>
        <div className="battleI">BATTLE INFO HERE</div>
        <div className="scoreI">SCORE FEED HERE</div>
        <div className="challengesI"> CHALLENGES INFO HERE</div>
       
      </Grid> 
      <Button>Issue Challenge</Button> 
    <Button primary>Home</Button>

   
         
               </div>
      
    
  
    );
  }
}


export default Dashboard; 


//props pass data into the components
