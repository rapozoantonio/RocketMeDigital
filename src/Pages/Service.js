import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import HRService from '../components/Service/HRService';
import PrototypeService from '../components/Service/Sservice/PrototypeService';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import ClientFeatures from "../components/Features/ClientFeatures";
import FooterData from '../components/Footer/FooterData';

const Service = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Nossos Serviços" Pdescription="
Destaque-se do seus concorrentes chatos, presos no tempo desde 2001; humanize sua marca e destaque-se. Criamos sites B2B que impulsionam lucros e conectam pessoas." />
            <HRService ServiceData={ServiceData} />
            <PrototypeService />
            <ClientFeatures />
            <FooterTwo fClass="pt_150" FooterData={FooterData} />
        </div>
    )
}
export default Service;