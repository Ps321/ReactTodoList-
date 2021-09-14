import React from 'react';
import '../App.css';

export default function Aboutr() {
    return (
        <div className="container " style={{ width: '100vw', maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '100px', background: 'url(images/bgupdatednew.png)', backgroundPosition: 'canter', backgroundAttachment: 'scroll', backgroundSize: '100vw' }}>

            <div style={{ width: '100vw', maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '100px', background: 'url(images/Small-Stars.png)', backgroundPosition: 'canter', backgroundAttachment: 'scroll', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                <div style={{ position: 'relative', zIndex: '0' }}>


                    <img src="images/about_us-banner.jpg" width="100%" alt="" srcset="" />
                    <div id="bannertxt" style={{ position: 'absolute', top: '10%', right: '5%' }}>
                        <h1 style={{ color: '#f00001', top: '10%', fontSize: '5vw', fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>ACING</h1>
                        <h1 style={{ color: 'white', top: '20%', fontSize: '5vw', fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>CONTENT</h1>
                        <h1 style={{ color: 'white', top: '30%', fontSize: '5vw', fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>DELIVERY</h1>
                    </div>
                </div>

                <div className="container" >
                    <br /> <br /> <br />
                    <h3 style={{ textAlign: 'center', color: '#ffde00', fontSize: '38px', fontWeight: '700', }}>WHO ARE WE</h3>
                    <br />
                    <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>Unbridled creativity, fresh talent and a fierce passion for gaming tempered with sharp business acumen is the best way to describe Rockace's exemplary workforce. Coupled with our commitment to a culturally diverse workforce, this gives us a competitive advantage. It ensures that we don't merely exist but thrive in a rapidly-evolving business environment.</p>
                </div>

                <div className="container" >
                    <br /> <br /> <br />
                    <h3 style={{ textAlign: 'center', color: '#ffde00', fontSize: '38px', fontWeight: '700', }}>ACE PLAYERS</h3>
                    <br />
                    <div className="row" style={{ width: '75%', marginLeft: '20%' }}>

                        <div className="col-md-6 col-sm-12">
                            <div className="card" style={{ width: '19rem' }}>

                                <img className="card-img-top" src="images/utkarsh_veer.jpg" alt="Card image cap" />
                                <div className="card-body" style={{ backgroundColor: '#292845', color: 'white', textAlign: 'center', fontWeight: '700' }}>
                                    <h4 className="card-text">Utkarsh Veer</h4>
                                    <h6 className="card-text" style={{ color: '#ffde00' }}>Managing Director</h6>
                                    <img id='lin' src="images/linkedin.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card" style={{ width: '19rem' }}>

                                <img className="card-img-top" src="images/cyrus.jpg" alt="Card image cap" />
                                <div className="card-body" style={{ backgroundColor: '#292845', color: 'white', textAlign: 'center', fontWeight: '700' }}>
                                    <h4 className="card-text">CYRUS MISTRY</h4>
                                    <h6 className="card-text" style={{ color: '#ffde00' }}>CHIEF EXECUTIVE OFFICER</h6>
                                    <img id='lin' src="images/linkedin.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row" style={{ width: '75%', marginLeft: '20%' }}>

                        <div className="col-md-6 col-sm-12">
                            <div className="card" style={{ width: '19rem' }}>

                                <img className="card-img-top" src="images/bea_mariehomes.jpg" alt="Card image cap" />
                                <div className="card-body" style={{ backgroundColor: '#292845', color: 'white', textAlign: 'center', fontWeight: '700' }}>
                                    <h4 className="card-text">BEA MARIE HOLMES</h4>
                                    <h6 className="card-text" style={{ color: '#ffde00',fontWeight:'400' }}>MANAGER BUSINESS DEVELOPMENT</h6>
                                    <img id='lin' src="images/linkedin.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card" style={{ width: '19rem' }}>

                                <img className="card-img-top" src="images/anand.jpg" alt="Card image cap" />
                                <div className="card-body" style={{ backgroundColor: '#292845', color: 'white', textAlign: 'center', fontWeight: '700' }}>
                                    <h4 className="card-text">DAS ANAND AROKIA</h4>
                                    <h6 className="card-text" style={{ color: '#ffde00' }}>PRODUCER</h6>
                                    <img id='lin' src="images/linkedin.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
