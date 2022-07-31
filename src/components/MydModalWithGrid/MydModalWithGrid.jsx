import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import './MydModalWithGrid.scss'


export function MydModalWithGrid(props) {



    return (
                <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size='lg' centered dialogClassName="modal-40w" >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Detalle de tu compra
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                    {/* N°: <small id='smallId'>{buy.total}</small> */}
                                </Col>

                                <Col xs={6} md={6}>
                                    Forma de envio: 
                                </Col>
                            </Row>
                
                            <Row>
                                <Col xs={6} md={6} className='mt-1'>
                                    {/* Fecha: {buy.date.toDate().toLocaleDateString()} */}
                                </Col>

                                <Col xs={6} md={6} className='mt-1'>
                                    Direccion de envio:
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={4} className='mt-1'>
                                    Forma de pago:
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col xs={12} md={12} className='mt-5'>
                                    Productos:
                                </Col>
                                <Col>
                                    adsa
                                </Col>
                            </Row>
                
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
    )
}