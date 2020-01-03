import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap'

import Subtotal from './components/subtotal/subtotal'
import PickupSavings from './components/pickupSavings/pickupSavings'
import TaxesFees from './components/taxesFees/taxesFees'
import EstimatedTotal from './components/estimatedTotal/estimatedTotal'
import ItemDetails from './components/itemDetails/itemDetails'
import PromoCodeDiscount from './components/promoCode/promoCode'

import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100000,
      pickupSavings : -20000,
      taxes: 0,
      estimatedTotal: 0
    }
  }
  
  componentDidMount = () =>{
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.75
    })
    this.setState({
      estimatedTotal: (this.state.total + this.state.pickupSavings + this.state.taxes)
    })
    console.log(this.state," ini state componentDidMount")
  }

  giveDiscountHandler(){
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      })
      this.setState({
        disablePromoButton: true
      })
    }
  }

  render(){
    console.log(this.state,"ini state")
    return (
      <div>
        <h1 className="container">
          <Container className="purchase-card">
            <Subtotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.pickupSavings} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
            <hr />
            <PromoCodeDiscount 
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoButton}
            />
          </Container>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
