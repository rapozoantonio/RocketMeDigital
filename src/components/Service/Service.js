import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad mt-5">
                <div className="container">
                    <SeoTitle Title='Qual o tipo do seu produto?' TitleP='Esta classificação é importante porque o perfil do produto no comércio eletrônico define o seu plano de negócio.'/>
                    <div className="row seo_service_info" >
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4 id="Service">Produto Físico</h4>
                                    </a>
                                    <p>Você precisa mostrar como as compras online podem ser uma alternativa valiosa - imagens precisas e descrições de produtos detalhada ajudam na escolha de compra.</p>
                                    
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Produto Digital</h4>
                                    </a>
                                    <p>Você enfrenta uma forte concorrência com conteúdo ou software gratuito e deve enfatizar os benefícios da compra de produtos em vez de obtê-los gratuitamente.</p>
                                    
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Serviço</h4>
                                    </a>
                                    <p>Se o seu negócio eletrônico vende serviços definitivamente você precisa envolver canais de comunicação por telefone ou e-mail para acertar os detalhes e finalizar o negócio com o cliente.</p>
                                    
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Nós ajudamos marcas a transformar ideias em realidades lucrativas.</h2>
                                    <p>Ter seu próprio ecommerce é uma ótima maneira de você desenvolver sua marca, conquistar clientes, obter novos insights e realizar mais vendas!</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Taxa de conversão de vendas</h3>
                                            <p>Sua taxa de conversão de vendas, é a porcentagem de visitantes que fazem uma compra. Esta é a métrica com a qual você mais se preocupará, ela está intimamente ligada às métricas gerais de receita.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Experiência do cliente</h3>
                                            <p>Quando se trata de uma ótima experiência online, os compradores têm principalmente duas coisas em mente: velocidade e usabilidade.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img_two.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Quer saber como expandir seu negócio atravez de um ecommerce?</h2>
                                    <h6 className="wow fadeInUp">Agende uma ligação e receba um plano de trabalho com detalhes sobre como alcançaremos seus objetivos e venceremos os obstáculos do seu mercado!</h6>
                                    <p className="wow fadeInUp">Não há momento melhor do que agora, com um público cada vez mais familiarizado com o uso do e-commerce para fazer uso de diversos produtos e serviços, veremos coisas cada vez mais incríveis tanto para empreendedores quanto para consumidores.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
