import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
const NotFound = () => (
  <div className="body_wrapper">
    <CustomNavbar hbtnClass="new_btn" />
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/new/error.png")} alt="" />
          <h2>
            Erro. Não conseguimos encontrar a página que você está procurando.
          </h2>
          <p>Desculpe pela inconveniência. Vá para nossa página inicial... </p>
          <a href="/" className="about_btn btn_hover">
            Voltar à página inicial <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </section>
    <FooterTwo FooterData={FooterData} />
  </div>
);
export default NotFound;
