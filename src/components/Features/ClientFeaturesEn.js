import React from 'react';
import ClientFeaturesItem from './ClientFeaturesItem';

const ClientFeaturesEn = () => {
    return (
        <section className="h_security_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Strategic Partnerships</span> for Digital Growth</h2>
                </div>
                <div className="row">
                    <ClientFeaturesItem itemClass="pr_70" image="security_1.png" Title="Digital Transformation for Marketing Agencies" pText="Robust partnerships with marketing agencies, facilitating the digital evolution of their clients through the development of B2B websites. We elevate the digital presence to capture qualified leads and maximize conversions." />
                    <ClientFeaturesItem itemClass="pl_70" image="security_2.png" Title="Advanced E-commerce" pText="We develop e-commerce platforms that turn visitors into buyers, through an impeccable user experience and conversion optimization, driving sales and sustainable growth." />
                    <ClientFeaturesItem itemClass="pr_70" image="security_3.png" Title="Digital Presence for Companies and Entrepreneurs" pText="We create custom web solutions for companies and entrepreneurs aiming to stand out in the digital market. Our websites are designed to reflect the essence of the brand and effectively engage the target audience." />
                    <ClientFeaturesItem itemClass="pl_70" image="security_4.png" Title="Data Protection and Security" pText="Your data security is our top priority. We offer solutions that protect sensitive information, ensuring trust and operational security for digital businesses in all online transactions and interactions." />
                </div>
            </div>
        </section>
    )
}
export default ClientFeaturesEn;