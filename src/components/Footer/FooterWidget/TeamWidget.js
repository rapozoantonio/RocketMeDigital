import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import { Link, NavLink } from "react-router-dom";

class TeamWidget extends Component {
  render() {
    let FooterData = this.props.FooterData;
    var { ftitle } = this.props;
    return (
      <Reveal effect="fadeInUp" duration={1800}>
        <div className="col-lg-3 col-md-6">
          <div
            className="f_widget about-widget pl_70 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <h3 className="f-title f_600 t_color f_size_18 mb_40">{ftitle}</h3>
            <ul className="list-unstyled f_list">
            <li>
                <NavLink title="Home" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink title="Faq" className="nav-link" to="/Faq">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink title="Processo" className="nav-link" to="/Processo">
                  Processo
                </NavLink>
              </li>
              <li>
                <NavLink title="Serviços" className="nav-link" to="/Serviços">
                Serviços
                </NavLink>
              </li>
              <li>
                <NavLink title="Portfolio" className="nav-link" to="/Portfolio">
                Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default TeamWidget;
