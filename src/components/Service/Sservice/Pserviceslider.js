import React, { Component } from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0px',
          }
        }
      ]
    };
    return (
      <Slider className="service_carousel" {...settings}>
        <div className="service_item">
          <div className="icon s_icon_one"><i className="ti-check"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Desenvolvimento Web Sob Medida<br />Impulsione Seu Negócio</h4>
          <p>Transforme sua presença online com aplicações web B2B personalizadas, projetadas para capturar leads qualificados e aumentar suas vendas de forma exponencial.</p>
          <img className="float-right" src={require('../../../img/home2/undraw.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Otimização de Conversão<br />Resultados Comprovados</h4>
          <p>Maximize a eficácia do seu site com estratégias de otimização de conversão. Atraia, engaje e converta seu público-alvo com mais eficiência.</p>
          <img className="float-right" src={require('../../../img/home2/inbox.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_three"><i className="ti-search"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">SEO e Marketing de Conteúdo<br />Alcance Orgânico Ampliado</h4>
          <p>Amplie seu alcance no mercado com SEO e marketing de conteúdo estratégico, atraindo mais visitantes qualificados e aumentando a visibilidade do seu negócio.</p>
          <img className="float-right" src={require('../../../img/home2/file.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Análise e Inteligência de Negócios<br />Decisões Baseadas em Dados</h4>
          <p>Utilize análises avançadas e inteligência de negócios para entender melhor seus clientes e tomar decisões informadas que impulsionem o crescimento.</p>
          <img className="float-right" src={require('../../../img/home2/report.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_one"><i className="ti-check"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Integração de Sistemas<br />Fluxos de Trabalho Eficientes</h4>
          <p>Automatize e integre seus sistemas para criar fluxos de trabalho mais eficientes. Melhore a produtividade e reduza custos com soluções tecnológicas avançadas.</p>
          <img className="float-right" src={require('../../../img/home2/undraw.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Desenvolvimento Ágil<br />Entrega Rápida e Adaptável</h4>
          <p>Adote metodologias ágeis para acelerar o desenvolvimento e a entrega de suas aplicações web. Responda rapidamente às mudanças do mercado e às necessidades dos clientes.</p>
          <img className="float-right" src={require('../../../img/home2/inbox.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_three"><i className="ti-search"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Segurança e Conformidade<br />Proteja Seu Negócio</h4>
          <p>Garanta a segurança das suas aplicações web e a conformidade com regulamentos. Proteja os dados da sua empresa e dos seus clientes contra ameaças digitais.</p>
          <img className="float-right" src={require('../../../img/home2/file.png')} alt="" />
        </div>
        <div className="service_item">
          <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
          <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Suporte e Manutenção<br />Operação Ininterrupta</h4>
          <p>Assegure a operação ininterrupta das suas aplicações web com suporte e manutenção proativos. Mantenha seu negócio sempre à frente, sem interrupções.</p>
          <img className="float-right" src={require('../../../img/home2/report.png')} alt="" />
        </div>
      </Slider>
    )
  }
}
export default Pserviceslider;