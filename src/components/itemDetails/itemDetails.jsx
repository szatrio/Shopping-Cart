import React, { Component } from 'react'
import { Button, Collapse, Media, Card, Container, Row, Col } from 'react-bootstrap'

export default class itemDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                variant="light"
                className="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({open : !this.state.open})}
                >
                { this.state.open === false? `See` : `Hide`} item details
                { this.state.open === false? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Container>
                                <Media>
                                    
                                        <img
                                        width={100}
                                        heigth={100}
                                        alt="thumbnail"
                                        src="https://i5.walmartimages.com/asr/c9cc9f46-7eb2-42c9-b255-a699b2249846_1.b25708e4a3de9ddcf9966903ca1b0de4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" />
                                    
                                </Media>
                                <Media.Body>
                                    <h3>Kursi Gaming Fortnite</h3>
                                    <h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus.
                                    </h5>
                                </Media.Body>
                                <Row>
                                    {/* <h4> */}
                                        <Col md={6}>
                                            <stong>
                                                {`Rp${this.props.price}`}
                                            </stong>
                                            <br />
                                            <strong className="price-strike">{`Rp${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    {/* </h4> */}
                                </Row>
                            </Container>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}
