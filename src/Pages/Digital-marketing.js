import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';
import Service from '../components/Service/Service';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';


const DigitalMarketing = () => {
    return(
        <div className="body_wrapper screen-size">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>
            {/* <Service />
            <FooterTwo FooterData={FooterData}/> */}
        </div>
    )
}
export default DigitalMarketing;