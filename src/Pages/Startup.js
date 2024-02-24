import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import StartupBanner from '../components/Banner/StartupBanner';



const Startup = () => (
    <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
        <StartupBanner/> 
        
        <FooterTwo FooterData={FooterData}/>
    </div>
)
export default Startup;