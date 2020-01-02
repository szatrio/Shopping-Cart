import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'

import Subtotal from './components/subtotal/subtotal'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100000
    }
  }
  
  render(){
    return (
      <div>
        <h1 className="container">
          <Container className="purchase-card">
            <Subtotal price={this.state.total.toFixed(2)} />
          </Container>
        </h1>
      </div>
    );
  }
}

export default App;
