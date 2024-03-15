import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import TeamWidget from "./FooterWidget/TeamWidget";

class FooterTwo extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
        <div className="footer_top">
          <div className="container">
            <div className="row">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInUp" key={widget.id}>
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <a href="index.html" className="f-logo">
                          <img src={require("../../img/logo.png")} alt="" />
                        </a>
                        <div className="widget-wrap">
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Email:</span>{" "}
                            <a
                              href="mailto:antonio@rocketmedigital.com"
                              className="f_400"
                            >
                              contato@rocketme.digital
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Phone:</span>{" "}
                            <a href="tel:948256347968" className="f_400">
                              +948 256 347 968
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <TeamWidget ftitle="Quem Somos" />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <p className="mb-0 f_400">{FooterData.copywrite}</p>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6"></div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href=".#">Termos de Uso</a>
                  </li>
                  <li>
                    <a href=".#">Política de Privacidade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterTwo;
