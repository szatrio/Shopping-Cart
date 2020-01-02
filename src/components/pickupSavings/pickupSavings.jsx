import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap'

let styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontweight: 800
    }
}

export default class pickupSavings extends Component {
    render() {
            <Tooltip>
                <p>
                        Picking up your order in the store helps out costs, and we pass the savings on to you.
                </p>
            </Tooltip>
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        <OverlayTrigger placement="button" overlay={tooltip}>
                            <div style={style.pickupSavings}>
                                Pickup Savings
                            </div>
                        </OverlayTrigger>
                    </Col>
                    <Col style={style.totalSavings}md={6}>
                        {`Rp${this.props.price}`}
                    </Col>
                </Row>
            </div>
        )
    }
}
