import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'

let styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 80
    }
}


export default class pickupSavings extends Component {
    render() { 
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                            <div style={styles.pickupSavings}>
                                Pickup Savings
                            </div>
                    </Col>
                    <Col style={styles.totalSavings}md={6}>
                        {`Rp${this.props.price}`}
                    </Col>
                </Row>
            </div>
        )
    }
}
