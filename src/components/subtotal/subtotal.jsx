import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class subtotal extends Component {
    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col md={5}>
                        Subtotal
                    </Col>
                    <Col md={5}>
                        {`Rp${this.props.price}`}
                    </Col>
                </Row>
            </div>
        )
    }
}
