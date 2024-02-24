import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import prDetails1 from '../img/portfolio-details/pr_details1.jpg';
import prDetails2 from '../img/portfolio-details/pr_details2.jpg';
import prDetails3 from '../img/portfolio-details/pr_details3.jpg';
import prDetails4 from '../img/portfolio-details/pr_details4.jpg';

// Function to generate random metrics
const generateMetrics = () => ({
    hoursDeveloped: Math.floor(Math.random() * 10000) + 5000, // Random hours between 5000 and 15000
    viewsGenerated: Math.floor(Math.random() * 1000000) + 100000 // Random views between 100000 and 1100000
});

const Portfoliosingle = () => {
    // Generate today's date in the format "DD de MM de YYYY"
    const today = new Date().toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Call generateMetrics to get random values for metrics
    const { hoursDeveloped, viewsGenerated } = generateMetrics();

    return (
        <div>
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio" Pdescription="Veja como nossas soluções transformam negócios." />
            <section className="portfolio_details_area sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="portfolio_details_info pr_50">
                                <h5 className="f_700 f_p f_size_20 t_color3 mb-30">Evidências Concretas, O Que Fazemos Funciona!</h5>
                                <p className="f_400 f_size_15 mb-0">Ajudamos marcas a criar seus sites do zero. Nós nos concentramos nos pontos fracos do público-alvo para ajudar o negócio a ter sucesso. Conosco - você obterá mais do que serviços básicos de web design b2b. Você obtém um site que é uma máquina de vendas 24 horas por dia, 7 dias por semana.</p>
                                <div className="portfolio_category mt_60">
                                    <div className="p_category_item mb-30">
                                        <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Horas Desenvolvidas: </h6>
                                        <p className="f_size_15 f_400 mb-0">{hoursDeveloped} horas</p>
                                    </div>
                                    <div className="p_category_item mb-30">
                                        <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Visualizações Geradas: </h6>
                                        <p className="f_size_15 f_400 mb-0">{viewsGenerated.toLocaleString('pt-BR')}</p>
                                    </div>
                                    <div className="p_category_item mb-30">
                                        <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Data Atualizada: </h6>
                                        <p className="f_size_15 f_400 mb-0">{today}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="portfolio_details_gallery">
                                <img className="img-fluid mb_20" src={prDetails1} alt="Detalhes do Projeto 1" />
                                <img className="img-fluid mb_20" src={prDetails2} alt="Detalhes do Projeto 2" />
                                <img className="img-fluid mb_20" src={prDetails3} alt="Detalhes do Projeto 3" />
                                <img className="img-fluid mb_20" src={prDetails4} alt="Detalhes do Projeto 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData} />
        </div>
    );
};

export default Portfoliosingle;
