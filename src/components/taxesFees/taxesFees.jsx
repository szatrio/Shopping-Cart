import React, { Component } from 'react'
import { Col, Row} from 'react-bootstrap'

export default class taxesFees extends Component {
    render() {
        console.log(this.props,"ini props taxes")
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        PPN Taxes
                    </Col>
                    <Col md={6}>
                        {`Rp${this.props.taxes}`}
                    </Col>
                    <hr />
                </Row>
            </div>
        )
    }
}
