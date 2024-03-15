import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import "../App.css";

class CustomNavbar extends Component {
    render() {
        var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                    <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                        <div className={`container ${cClass}`}>
                            <Link className={`navbar-brand ${slogo}`} to="/Services">
                                <img
                                    className="logo-img"
                                    src={require("../img/logo2.png")}
                                    alt=""
                                />
                                <img
                                    className="logo-img"
                                    src={require("../img/logo.png")}
                                    alt="logo"
                                />
                            </Link>
                            <div className="action_btn d-flex align-items-center">
                                <a
                                    href="https://web.whatsapp.com/send?phone=5521984080735"
                                    target="_blank"
                                    className="btn_hover agency_banner_btn wow fadeInLeft btn-navbar btn-orange"
                                    data-wow-delay="0.5s"
                                >
                                    Contact Now!
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;
