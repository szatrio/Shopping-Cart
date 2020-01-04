import React, { Component } from 'react'
import {
    Button,
    Collapse,
    Card,
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    Container
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleChange } from '../../actions/promoCodeActions'

class promoCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            // value: '',
            disabledPromoButton: false
        }
    }
    
    handleChange = e =>{
        this.props.handleChange(e)
    }

    render() {
        console.log(this.props, "ini props promocode jsx")
        return (
            <div>
                <Button 
                className="promo-code-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open})}
                >
                {this.state.open === false ? 'Apply ' : 'Hide '}
                promo code
                {this.state.open === false ? ' +' : ' -'}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card className="m-3">

                                <Row className="show-grid">
                                    <Container>
                                            <Col md={12}>
                                                <Form>
                                                    <FormGroup controlId="formInlineName">
                                                        <FormLabel>
                                                            Promo Code
                                                        </FormLabel>
                                                        <FormControl 
                                                        type="text"
                                                        placeholder="Enter promo code"
                                                        value={this.props.promoCode}
                                                        onChange={this.handleChange}
                                                        />
                                                    </FormGroup>
                                                    <Button
                                                    variant="success"
                                                    className="btn-round mb-3"
                                                    disabled={this.props.isDisabled}
                                                    onClick={this.props.giveDiscount}
                                                    >
                                                        Apply
                                                    </Button>
                                                </Form>
                                            </Col>
                                    </Container>
                                </Row>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCodex.value
})

export default connect(mapStateToProps, {handleChange})(promoCode)