import React from 'react';
import CustomNavbarEn from '../components/CustomNavbarEn';
import Breadcrumb from '../components/Breadcrumb';
import HRServiceEn from '../components/Service/HRServiceEn';
import PrototypeServiceEn from '../components/Service/Sservice/PrototypeServiceEn';
import ServiceDataEn from '../components/Service/ServiceDataEn';
import ClientFeaturesEn from "../components/Features/ClientFeaturesEn";
import FooterTwoEn from '../components/Footer/FooterTwoEn';
import FooterDataEn from '../components/Footer/FooterData';

const Service = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbarEn slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our Services" Pdescription="
Stand out from your dull competitors, stuck in a time loop since 2001; humanize your brand and shine bright. We create B2B websites that drive profits and connect people." />
            <HRServiceEn ServiceData={ServiceDataEn} />
            <PrototypeServiceEn />
            <ClientFeaturesEn />
            <FooterTwoEn fClass="pt_150" FooterData={FooterDataEn} />
        </div>
    )
}
export default Service;