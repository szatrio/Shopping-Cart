import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class estimatedTotal extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <h2>
                            Est. Total
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>
                            {`Rp${this.props.price}`}
                        </h2>
                    </Col>
                </Row>
            </div>
        )
    }
}
