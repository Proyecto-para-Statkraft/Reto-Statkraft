import React, { useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../style/home.css';

const Home = () => {

    const [modalTransportPersonnel, setModalTransportPersonnel] = useState(false);
    const [modalWork, setModalWork] = useState(false);
    const [modalBuyAndSell, setModalBuyAndSell] = useState(false);
    const [modalCVInstallation, setModalCVInstallation] = useState(false);
    const [modalJobIntermediation, setModalJobIntermediation] = useState(false);
    const [modalLocationOfServices, setModalLocationOfServices] = useState(false);

    return (
        <div className="view-home">
            <Header />
            <div className="m-5 d-flex justify-content-center banner-contract">
                <div className="borde col-sm-5 banner-text">
                    <div className="text-center">
                        <h3 className="m-5">Empieza a crear tu contrato</h3>
                    </div>
                    <div className=" d-flex justify-content-center ">
                        <Link className="col-sm-6 mb-5 btn btn-primary " to="/welcomecontract">Empezar</Link>
                    </div>
                </div>
            </div>
            <div className="section-types-contracts">
                <p className="text-center contract-subtitle">Conoce nuestros 6 tipos de contratos</p>
                <div className="m-3 d-flex justify-content-center cards-type-contracts">
                    <div className="card-deck justify-content-center">
                        <div className="borde card style" onClick={() => setModalTransportPersonnel(true)} role="presentation">
                            <img src="https://img.icons8.com/ios/100/000000/ground-transportation.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Transporte de Personal</p>
                            </div>
                        </div>
                        {
                            (modalTransportPersonnel) &&
                            <Modal
                                show={modalTransportPersonnel}
                                onHide={() => setModalTransportPersonnel(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato de Transporte de Personal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Mediante este contrato Statkraft contrata y paga por el servicio de traslado 
                                        de personas o bienes. El tercero contratado (proveedor) se encarga del medio 
                                        de transporte, conductores y demás medios necesarios para prestar el servicio.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalTransportPersonnel(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        <div className="borde card style" onClick={() => setModalWork(true)} role="presentation">
                            <img src="https://img.icons8.com/ios/100/000000/crane.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Obra</p>
                            </div>
                        </div>
                        {
                            (modalWork) &&
                            <Modal
                                show={modalWork}
                                onHide={() => setModalWork(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato de Obra
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Mediante este contrato Statkraft contrata y le paga a un tercero para la 
                                        construcción de una obra civil, lo que incluye el personal, la ingeniería 
                                        y los materiales necesarios.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalWork(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        <div className="borde card style" onClick={() => setModalBuyAndSell(true)} role="presentation">
                            <img src="https://img.icons8.com/ios/100/000000/sell-property--v1.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Compraventa</p>
                            </div>
                        </div>
                        {
                            (modalBuyAndSell) &&
                            <Modal
                                show={modalBuyAndSell}
                                onHide={() => setModalBuyAndSell(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato de Compraventa
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Mediante este contrato Statkraft compra un bien y le paga el precio al
                                        vendedor (proveedor).
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalBuyAndSell(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        <div className="borde card style" onClick={() => setModalCVInstallation(true)} role="presentation">
                            <img src="https://img.icons8.com/ios/100/000000/home-automation.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Modelo CV + Instalación</p>
                            </div>
                        </div>
                        {
                            (modalCVInstallation) &&
                            <Modal
                                show={modalCVInstallation}
                                onHide={() => setModalCVInstallation(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato de CV + Instalación
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Mediante este contrato Statkraft compra un bien, le paga el precio al vendedor
                                        (proveedor) y este último además debe instalar el bien en el lugar indicado por
                                        Statkraft.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalCVInstallation(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        <div className="borde card style" onClick={() => setModalJobIntermediation(true)} role="presentation">
                            <img src="https://img.icons8.com/ios/100/000000/contract-job.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato de Intermediación Laboral</p>
                            </div>
                        </div>
                        {
                            (modalJobIntermediation) &&
                            <Modal
                                show={modalJobIntermediation}
                                onHide={() => setModalJobIntermediation(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato de Intermediación Laboral
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Este contrato se utiliza cuando se requiere que una empresa intermediadora 
                                        preste servicios mediante el destaque de personal a las instalaciones de 
                                        Statkraft. Estos servicios solo pueden ser temporales, complementarios o 
                                        especializados.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalJobIntermediation(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        <div className="borde card style" onClick={() => setModalLocationOfServices(true)}>
                            <img src="https://img.icons8.com/ios/100/000000/mortgage.png" className=" card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Contrato Locación de Servicios</p>
                            </div>
                        </div>
                        {
                            (modalLocationOfServices) &&
                            <Modal
                                show={modalLocationOfServices}
                                onHide={() => setModalLocationOfServices(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                animation
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Contrato Locación de Servicios
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-center">
                                        Mediante este contrato Statkraft puede contratar otros servicios, 
                                        no incluidos en las definiciones anteriores, por un determinado 
                                        tiempo y a cambio del pago de una contraprestación al tercero que 
                                        presta el servicio (proveedor).
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setModalLocationOfServices(false)} variant="info">Aceptar</Button>
                                </Modal.Footer>
                            </Modal>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
