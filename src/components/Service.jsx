import React from "react";

import h_antivirus from '../assets/img/service/head_antivirus.jpg';
import h_comp_ass from '../assets/img/service/head_computer_ass.jpg';
import h_comp_chip from '../assets/img/service/head_computer_chip.jpg';
import h_comp_rep from '../assets/img/service/head_computer_rep.jpg';
import h_lcd from '../assets/img/service/head_lcd.jpg';
import h_mobile from '../assets/img/service/head_mobile.jpg';

import s01_mouse from '../assets/img/service/01_mouse_lapcare.jpg';
import s02_mouse from '../assets/img/service/02_mouse_lapcare.jpg';
import s03_mouse from '../assets/img/service/03_mouse_lenovo.jpg'
import s04_key from '../assets/img/service/04_key_alfa+.jpg'
import s05_key from '../assets/img/service/05_key_prod.jpg'
import s06_key from '../assets/img/service/06_key_pro.webp'
import s07_av from '../assets/img/service/07_anti_quick.jpg'
import s08_av from '../assets/img/service/08_anti_guardian.jpg'
import s09_av from '../assets/img/service/09_anti_k7.jpg'
import s10_cable from '../assets/img/service/10_cable_hdmi.jpg'
import s11_cable from '../assets/img/service/11_cable_vga.jpg'
import s12_cable from '../assets/img/service/12_cable_hdmi2vga.jpeg'
import s13_dcable from '../assets/img/service/13_dcable_mi.jpg'
import s14_cable from '../assets/img/service/14_cable_printer.jpg'
import s15_cable from '../assets/img/service/15_cable_veera.jpg'
import s16_pendrive from '../assets/img/service/16_pendrive_hp.jpg'
import s17_pendrive from '../assets/img/service/17_pendrive_kig.jpg'
import s18_pendrive from '../assets/img/service/18_pendrive_sandisk.jpg'
import s19_printer from '../assets/img/service/19_printer_car.jpg'
import s20_cd from '../assets/img/service/20_cdwriter.jpg'
import s21_ram from '../assets/img/service/21_ram.jpg'
import s22_lap from '../assets/img/service/22_laptopadop.jpg'
import s23_powerc from '../assets/img/service/23_powercable.jpeg'
import s24_epson from '../assets/img/service/24_epson_ink.jpg'




let Service = () => {
    return (
        <>

            {/* <!---------------------------services card--------------------------> */}
            <section>
                <div className="container">
                    <h1 className="display-4 text-center mt-3"><b>Our Services</b></h1><hr />
                    <div className="row">
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_comp_ass} alt="Card image cap" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Computer Accessories</h4> <hr />
                                    <p className="lead">Mouse, Keyboard, Ram , CPU Fan, Cartridge, Ink(Epson, Canon ), Antivirus (Quick heal total/pro,Guardian, K7 ....), VGA Cable,HDMI Cable, Printer Cable, Lamination Paper and so many iitem in best Price.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_comp_rep} alt="Card image cap" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Computer/Laptop Reparing</h4> <hr />
                                    <p className="lead">Hard drive crashes,water spilled keyboards, network failures, virus attacks. Data back up and recovery, System board/main board repair, Hard drive upgrade, Video graphics, Optical drive. Windows, Linux and Mac Os Installation, Troubleshooting of Laptop, Desktop</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_comp_chip} alt="Card image cap" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Chip Level Laptop Reparing </h4> <hr />
                                    <p className="lead">
                                        Computer and Laptop Repair, Start-Up Issue, Battery Power Problem, Display Flickering. Faint or Blur, Red/Green or Coloured Display, Overheat and Shutdown Issue, Laptop Motherboard, LCD Replacement,
                                        Dead Battery, Faulty Adapter, Broken Hinge Repair/Replacement, Keypad or TouchPad Problem & Keyboard Replacement
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>

                    </div> {/* ROW */}
                    <br />
                    <div className="row">
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_antivirus} alt="quick heal total" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Antivirous</h4> <hr />
                                    <p className="lead">Quick Heal Pro, Quick Heal Total, Guardian Pro/Total, K7 Premium/Total and all other Antivirus please Contact Us @Om Computer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_lcd} alt="lcd img" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">LCD & LED Reparing</h4> <hr />
                                    <p className="lead">Laptop, Desktop, Monitors (LCD, LED Panels) and CRT Monitors, Mobile Panels and all other please Contact Us @Om Computer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-12">
                            <div className="card" style={{height:650}}>
                                <div><img className="card-img-top" src={h_mobile} alt="mobile rep img" height="300" /></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Mobile Phones Services</h4> <hr />
                                    <p className="lead">Chip Level Mobile Reparing Contact Us @Om Computer</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 7 Oct 2019 ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <br /><br />
            {/* ----------------------------------------------------- */}




            {/* <!-----------------------Computer Assosaries --------------------------------------> */}
            <section>
                <div className="container">
                    <h2 className="text-center p-2 bg-info">Computer Accessories</h2><hr className="my-2" />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s01_mouse} alt="mouse" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Lapcare Wired Mouse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s02_mouse} alt="mouse" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">lapcare mouse.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s03_mouse} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">lenovo mouse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s04_key} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Lapcare Alfa+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s05_key} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Prodot Standard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s06_key} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Prodot chiclet</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s07_av} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Quick Heal Pro</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s08_av} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Guardian Internet Security</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s09_av} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">K7 Total Security.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s10_cable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">G-Link Hdmi Cable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s11_cable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">G-Link VGA Cable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s12_cable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">HDMI to VGA Cable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s13_dcable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">mi Data Cable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s14_cable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Printer Cable</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s15_cable} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Veera Data Cable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s16_pendrive} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">HP Pendrive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s17_pendrive} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Kingston Pendrive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s18_pendrive} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Sandisk Pendrive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s19_printer} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">Printer Cartridge</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s20_cd} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">CD Writer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-thumbnail">
                                <div className="card-img-wrap"><img className="card-img-top" src={s21_ram} alt="Card image cap" height="300" /></div>
                                <div className="caption">
                                    <p className="text-center">RAM</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            {/* <!----------------------------End Image galllary section-----------------------------> */}







        </>
    )
}

export default Service;