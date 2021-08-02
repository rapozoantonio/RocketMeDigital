import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import {ImWhatsapp} from 'react-icons/im'
class AgencyBanner extends Component {
    render(){
        let BannerData = this.props.BannerData;
        return(
            <section className="agency_banner_area bg_color">
                <img className="banner_shap" src={require('../../img/home4/banner_bg.png')} alt=""/>
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="agency_content">
                            <Reveal effect="fadeInUp">
                                {
                                    BannerData.AgencyText.map(Agency =>{
                                        return(
                                            <React.Fragment key={Agency.id}>
                                                <h1 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s">{Agency.btitle}</h1>
                                                <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">{Agency.description}</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <div className="action_btn d-flex align-items-center mt_60">
                                    <a href="https://web.whatsapp.com/send?phone=5521984080735" target="_blank" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s"><ImWhatsapp size={25}/>  Fale Conosco</a>
                                </div>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-lg-7 text-right">
                            <Reveal effect="fadeInRight"><img className="protype_img wow fadeInRight" data-wow-delay="0.3s" src={require('../../img/home4/banner_img.png')} alt=""/></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AgencyBanner;