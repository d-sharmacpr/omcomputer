import React from "react";
import {Helmet} from "react-helmet";

let Contact = () => {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Om Computer Garkha | Contact</title>
                <link rel="canonical" href="https://omcomputerinfo.in" />
                <meta name="description" content="Om Computer Garkha Saran Bihar,841311. Computer accessories,Computer/Laptop Repair,Laptop Chip-Level Repair,LCD/LED Repair."/>
                <meta name="keywords" content="Om Computer,Om Computer Garkha,Garkha,Garkha Saran,Garkha Computer,Computer Garkha,Shop Garkha,Garkha Mobile,LED Garkha,LCD"/>
                <meta name="author" content="om computer garkha"/>
            </Helmet>

            {/* <!--Section: Contact v.1--> */}
            <section className="section p-3 m-3">
                {/* <!--Section heading--> */}
                <h2 className="section-heading pt-2 text-dark font-weight-bold">Contact us</h2>  <hr/>
                    {/* <!--Section description--> */}
                    <div className="ml-3">
                        <p>Chapra Road Garkha In Front of Central Bank of India</p>
                        <p>Garkha, Saran , Bihar, 841311</p>
                        <p>Mob.- 9955153569</p>
                        <p>Email- omcinfo2015@gmail.com</p><br/>
                    </div>

                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-lg-5 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-header  accent-1">
                                        <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                                    </div>

                                    <p className="text-secondary">We'll write rarely, but with only the best content.</p>
                                    <br/>
                                        {/* <!--Body--> */}
                                        <div className="md-form">
                                            <i className="fa fa-user prefix grey-text"></i>  <label for="form-name">Your name</label>
                                            <input type="text" id="form-name" className="form-control"/>

                                        </div>
                                        <div className="md-form">
                                            <i className="fa fa-envelope prefix grey-text"></i>
                                            <label for="form-email">Your email</label>
                                            <input type="text" id="form-email" className="form-control"/>
                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-tag prefix grey-text"></i>  <label for="form-Subject">Subject</label>
                                            <input type="text" id="form-Subject" className="form-control"/>
                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-pencil"></i><label for="form-text">Icon Prefix</label>
                                            <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                                        </div>

                                        <div className="text-center mt-4">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>

                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column Map and Address belo Map--> */}
                        <div className="col-lg-7">
                        <div className="z-depth-1-half map-container-6 overflow-hidden position-relative">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.0554589725007!2d84.86470704994291!3d25.83471778352312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b3e7d90ff4ad%3A0xbbfb7bfcc96778ae!2sOM%20COMPUTER!5e0!3m2!1sen!2sin!4v1570449398854!5m2!1sen!2sin"
                                    width="700" height="450" frameborder="1" allowfullscreen="" className="shadow overflow"></iframe>
                            </div>

                            <br/>

                                {/* <!--MapDown Address--> */}
                                <div className="row text-center text-danger">
                                    <div className="col-md-4">
                                        <a className="btn-floating accent-1"><i className="fa fa-map-marker"></i></a>
                                        <p>Garkha,Saran 841311</p>
                                        <p>Bihar (India)</p>
                                    </div>

                                    <div className="col-md-4">
                                        <a className="btn-floating accent-1"><i className="fa fa-phone"></i></a>
                                        <p>+91 9955153569</p>
                                        <p>Mon - Sat , 9:00-22:00</p>
                                    </div>

                                    <div className="col-md-4">
                                        <a className="btn-floating accent-1"><i className="fa fa-envelope"></i></a>
                                        <p>omcinfo2015@gmail.com</p>
                                        <p>omcomputergarkha@gmail.com</p>
                                    </div>

                                </div>
                                {/* <!-----End of Mapdown Address-----> */}
                        </div>
                    </div>
            </section>
            {/* <!--Section: Contact v.1--> */}
        </>
    )
}

export default Contact;