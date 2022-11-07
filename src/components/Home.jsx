import React from "react";
import {Helmet} from "react-helmet";
import home_car1 from '../assets/img/home_car2.jpg'
import home_car2 from '../assets/img/home_car1.jpg'
import home_car3 from '../assets/img/home_car3.jpg'
import home_c1 from '../assets/img/home_computer_ass.png'
import home_c2 from '../assets/img/home_computer_rep.jpg'
import home_c3 from '../assets/img/home_laptop_chip.jpg'
import home_logo from '../assets/img/logo.png'



let Home = () => {
    return (
        
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Om Computer Garkha</title>
                <link rel="canonical" href="https://omcomputerinfo.in" />
                {/* <link rel="icon" type="image/png" href="data:image/png;base64,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"/> */}
                <meta name="description" content="Om Computer Garkha Saran Bihar,841311. Computer accessories,Computer/Laptop Repair,Laptop Chip-Level Repair,LCD/LED Repair."/>
                <meta name="keywords" content="Om Computer,Om Computer Garkha,Garkha,Garkha Saran,Garkha Computer,Computer Garkha,Shop Garkha,Garkha Mobile,LED Garkha,LCD"/>
                <meta name="author" content="om computer garkha"/>
            </Helmet>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={home_car1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={home_car2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={home_car3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            {/* <!-- Intro Section --> */}
            <section className="p-4 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 animated swing">
                            <i className="fa fa-users text-success fa-4x"></i>
                            <h3 className="text-success font-weight-bold mt-2">Best Services</h3>
                            <p>
                                We are well known for our services in the market.
                                We deal with Laptop/Computer Service. We shall stick on to deadlines and deliver prompt services to you. Feel free to contact us.
                            </p>
                        </div>
                        <div className="col-md-4 animated swing">
                            <i className="fa fa-code text-success fa-4x"></i>
                            <h3 className="text-success font-weight-bold mt-2">Best Product</h3>
                            <p>
                                We have a selection of good quality computer accessories; laptops, desktops and tablets from famous brands;
                                compact printers and scanners; multimedia speakers and much more.
                            </p>
                        </div>
                        <div className="col-md-4 animated swing">
                            <i className="fa fa-book-reader text-success fa-4x"></i>
                            <h3 className="text-success font-weight-bold mt-2">Best Price</h3>
                            <p>
                                The price of the Every products we sell is the best in the Market for more details once visit in Om computer garkha.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Intro Section 2 --> */}
            <section className="p-3 bg-dark peach-gradient default-color text-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col animated jello">
                            <h1><b>We Provide Best Services across all over in India</b></h1>
                            <p className="lead">
                                Om Computer is a reliable computer Service in the city. We have a good quality computer accessories;
                                from famous brands.
                                The price of the products we sell is the best in the City. At our shop, you can find all that you need. Visit us at our shop.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Java Course Section --> */}
            <section className="p-4">
                <div className="container">
                    <div className="row align-items-center  animated bounceInLeft">
                        <div className="col-md-6">
                            <h3 className="text-teal font-weight-bold">Computer Assosaries</h3>
                            <p className="lead">
                                We provide all types of input devices, output devices such as monitors,RAM, laptop adapter, keyboards, Mouse, Usb Hub , speakers, scanners, headsets, graphics cards, motherboards, hard disks, storage devices and many more as well.
                                All of these products from our side are thoroughly tested and are compatible with wide range of brands.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <a href="" data-toggle="lightbox">
                                <img src={home_c1} className="img-fluid img-thumbnail c_img" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Angular Course Section --> */}
            <section className="p-4 bg-dark text-white">
                <div className="container">
                    <div className="row align-items-center  animated bounceInRight">
                        <div className="col-md-6">
                            <a href="" data-toggle="lightbox">
                                <img src={home_c2} className="img-fluid img-thumbnail c_img" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-teal font-weight-bold">Computer/Laptop Repair</h3>
                            <p className="lead">
                                Desktop, Laptop, Motherboard Repair, Broken LCD Screen, Hanging/Freezing, Trackpad, Connection, Battery Section Issue,
                                Wi-Fi Hard Disk Failure, Corrupted OS,
                                Processor Control Issues, Power Supply Problems, Keyboard, Memory, Laptop Restart Problem, Hard Disk & Password Recovery
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Bootstrap Course Section --> */}
            <section className="p-4">
                <div className="container">
                    <div className="row align-items-center  animated bounceInLeft">
                        <div className="col-md-6">
                            <h3 className="text-teal font-weight-bold">Computer Chip Level Reparing</h3>
                            <p className="lead">
                                Computer and Laptop Chip Level Repair, Start-Up Issue, Battery Power Problem, Display Flickering. Faint or Blur, Red/Green or Coloured Display, Overheat and Shutdown Issue, Laptop Motherboard, LCD Replacement, Dead Battery,
                                Faulty Adapter, Broken Hinge Repair/Replacement, Keypad or TouchPad Problem & Keyboard Replacement
                            </p>
                        </div>
                        <div className="col-md-6">
                            <a href="" data-toggle="lightbox">
                                <img src={home_c3} className="img-fluid img-thumbnail c_img" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;