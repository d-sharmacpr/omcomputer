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
                <link rel="canonical" href="http://mysite.com/example" />
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