import React from "react";

import manoj_img from '../assets/img/about/manoj.jpg';
import manoj_cer_1 from '../assets/img/about/1.jpg';
import manoj_cer_2 from '../assets/img/about/2.jpg';
import manoj_cer_3 from '../assets/img/about/3.jpg';
import manoj_cer_4 from '../assets/img/about/4.jpg';
import manoj_cer_5 from '../assets/img/about/5.jpg';
import manoj_cer_6 from '../assets/img/about/6.jpg';
import manoj_cer_7 from '../assets/img/about/4.jpg';
import {Helmet} from "react-helmet";

let About = () => {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Om Computer Garkha | About</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Om Computer Garkha Saran Bihar,841311. Computer accessories,Computer/Laptop Repair,Laptop Chip-Level Repair,LCD/LED Repair."/>
                <meta name="keywords" content="Om Computer,Om Computer Garkha,Garkha,Garkha Saran,Garkha Computer,Computer Garkha,Shop Garkha,Garkha Mobile,LED Garkha,LCD"/>
                <meta name="author" content="om computer garkha"/>
            </Helmet>

            <div className="container-flow">
                <div className="p-3 mx-4">
                    <h2> <b>About Us</b></h2>
                    <hr/>
                </div>
                <div className="mx-5">
                    <ul>
                        <li>We are the team of highly-skilled and qualified technicians for all your laptop repairs, our services is one of the best laptop repair services in Chapra Saran Bihar.</li>
                        <li>We repair all kind of major brands like Dell, HP, Lenovo, Acer, Apple, Compaq, Toshiba, Sony, Samsung, Asus. Whenever you want to have laptop repair supports just call us.</li>
                        <li>we have Trained and skill oriented professional who will provide the reliable customer-oriented service.</li>
                    </ul>
                </div>
                <div className="p-3 mx-4">
                    <hr/>
                </div>
            </div>


            {/* <!-----------------Manoj kr Profile section---------------------------------------------------------> */}
            <section>
                <div className="container">
                    <div className="card border shadow p-3 ">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="pl-4"><img src={manoj_img}  width="250" height="200" className="rounded-circle img-fluid shadow"/></div>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title font-weight">Mr. Manoj Sharma</h4><hr/>
                                        <p className="card-text lead">Getting Certificate in Laptop/Desktop Chip Level Repearing from Microchip Expert Solution New Delhi.</p>
                                        <p className="card-text lead">Getting Certificate in Computer and Chip Level Laptop Repearing from AFS Institute Bangalore.</p>
                                        <p className="card-text lead">7+ Year Experience in Mobile Software and Laptop/Desktop Chip Level Repairing </p>
                                        <div>
                                            <p className="card-text lead">Email Id :- manojgarkha@gmail.com </p>
                                            <p className="card-text lead">Mobile No :- 9852481139</p>
                                            <div>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <br/><br/>
                {/* <!-----------------End of Manoj kr Profile section---------------------------------------------------------> */}
                <div className="container-flow p-3">
                    <hr className="bg-info p-2"/>
                </div>

                {/* <!-- Courses Section --> */}
                <section className="p-3 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3 className="text-teal font-weight-bold">Our Achievements</h3>
                                <p className="lead text-teal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veniam?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_1} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_2} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_3} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_4} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_5} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a data-toggle="lightbox">
                                    <img src={manoj_cer_6} className="img-fluid img-thumbnail c_image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


    </>
    )
}


export default About;