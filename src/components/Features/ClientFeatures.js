import React from 'react';
import ClientFeaturesItem from './ClientFeaturesItem';

const ClientFeatures = () => {
    return (
        <section className="h_security_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Parcerias Estratégicas</span> para Crescimento Digital</h2>

                </div>
                <div className="row">
                    <ClientFeaturesItem itemClass="pr_70" image="security_1.png" Title="Transformação Digital para Agências de Marketing" pText="Parcerias robustas com agências de marketing, proporcionando a evolução digital de seus clientes através do desenvolvimento de websites B2B. Elevamos a presença digital para capturar leads qualificados e maximizar as conversões." />
                    <ClientFeaturesItem itemClass="pl_70" image="security_2.png" Title="E-commerce Avançado" pText="Desenvolvemos plataformas de e-commerce que transformam visitantes em compradores, através de uma experiência de usuário impecável e otimização de conversão, impulsionando vendas e crescimento sustentável." />
                    <ClientFeaturesItem itemClass="pr_70" image="security_3.png" Title="Presença Digital para Empresas e Empreendedores" pText="Criamos soluções web personalizadas para empresas e empreendedores que desejam destacar-se no mercado digital. Nossos websites são projetados para refletir a essência da marca e engajar efetivamente o público-alvo." />
                    <ClientFeaturesItem itemClass="pl_70" image="security_4.png" Title="Proteção e Segurança de Dados" pText="A segurança dos seus dados é nossa prioridade. Oferecemos soluções que protegem informações sensíveis, garantindo a confiança e a segurança operacional para empresas digitais em todas as transações e interações online." />

                </div>
            </div>
        </section>
    )
}
export default ClientFeatures;