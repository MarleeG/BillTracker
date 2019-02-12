import React, { Component } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import './components.css'

class Form extends Component {
    state = {
        showForm: false,
        lgShow: true,
    }

    handleSubmit = () => {
        this.setState({
            showForm: true,
            company: '',
        })
    }

    handleHide = () => {
        this.setState({
            showForm: false
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    form = () => {
        return (
            <div className='text-center'>
                <Modal
                    size="lg"
                    show={this.state.showForm}
                    onHide={this.handleHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Adding Bill
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row className="show-grid">
                                <Col xs={12} md={8}>
                                    <code>.col-xs-12 .col-md-8</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                            </Row>

                            <Row className="show-grid">
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className='text-center btn-add-bill'>
                    <Button onClick={this.handleSubmit} variant="warning" size='lg'> Add Bill </Button>
                    <br />
                    <br />
                    <Button onClick={this.handleSubmit} variant="warning" size='lg'> See Bills </Button>
                </div>

                {
                    this.state.showForm &&
                    this.form()
                }

            </div>
        )
    }
}

export default Form;