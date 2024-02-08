import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Process = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Nosso Processo" Pdescription="Nosso guia para construir um site de comércio eletrônico o orienta nas etapas para que você possa lançar seu ecommerce." />
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Estabeleça as bases para seu ecommerce" descriptions={<p>Crie e compre um nome de domínio, independentemente do que você está vendendo, às pessoas precisam de um bom motivo para comprar com você.
                            É aí que entra o conceito de proposição de valor. Ele fornece ao cliente uma razão clara e definível pela qual ele deve comprar de você e não de outros vendedores.</p>} />
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Seja único, encontre um desenvolvedor!" descriptions={<p>"Se você pretende criar seu ecommerce, contrate um desenvolvedor da web que tenha experiência em criar um ecommerce personalizado para você. Um desenvolvedor pode tornar o processo de configuração mais rápido, o que significa que você pode começar a vender mais cedo.</p>} />
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Acompanhe seu negócio com as ferramentas certas"
                            descriptions={<p>Para maximizar as conversões de leads em cada fase do ciclo de compra você vai precisar de ferramentas de automação de marketing. Essas ferramentas podem ajudá-lo a adotar uma estratégia de marketing baseada em dados, com métricas em tempo real e suporte dedicado ao cliente, para que você possa causar mais impacto com campanhas de mídia social e e-mail marketing.</p>} />
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Tráfego, Tráfego, Tráfego"
                            descriptions={<p>Você precisa de tráfego para gerar leads, para gerar clientes, para gerar lucro. Direcionar o tráfego certo permite que você preencha o topo de seu funil de vendas. O número de visitantes em seu site cresce a partir de dois tipos de tráfego: <a href="#">Tráfego Orgânico</a> e <a href="#">Tráfego Pago</a>.</p>} />
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_5.png" iImg="icon_05.png" ftitle="Construa parcerias com especialistas"
                            descriptions={<p>Um parceiro de negócios online pode ser mais lucrativo do que qualquer outro ativo no seu negócio, um parceiro especializado pode facilitar o processo de execução de campanhas de sucesso e também navegar em vários espaços online para que você possa alcançar seus objetivos com mais agilidade e precisão.
                            </p>} />
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData} />
        </div>
    )
}
export default Process;