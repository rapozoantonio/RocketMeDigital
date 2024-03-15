import React, { Component } from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]
        };
        return (
            <Slider className="service_carousel" {...settings}>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Custom Web Development<br />Boost Your Business</h4>
                    <p>Transform your online presence with customized B2B web applications, designed to capture qualified leads and exponentially increase your sales.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Conversion Optimization<br />Proven Results</h4>
                    <p>Maximize your site's effectiveness with conversion optimization strategies. Attract, engage, and convert your target audience more efficiently.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">SEO and Content Marketing<br />Extended Organic Reach</h4>
                    <p>Expand your market reach with strategic SEO and content marketing, attracting more qualified visitors and increasing your business's visibility.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Business Intelligence and Analytics<br />Data-Driven Decisions</h4>
                    <p>Use advanced analytics and business intelligence to better understand your customers and make informed decisions that drive growth.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">System Integration<br />Efficient Workflows</h4>
                    <p>Automate and integrate your systems to create more efficient workflows. Improve productivity and reduce costs with advanced technological solutions.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Agile Development<br />Fast and Adaptable Delivery</h4>
                    <p>Adopt agile methodologies to accelerate the development and delivery of your web applications. Quickly respond to market changes and customer needs.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Security and Compliance<br />Protect Your Business</h4>
                    <p>Ensure the security of your web applications and compliance with regulations. Protect your company's and your customers' data from digital threats.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt="" />
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Support and Maintenance<br />Uninterrupted Operation</h4>
                    <p>Ensure the uninterrupted operation of your web applications with proactive support and maintenance. Keep your business always ahead, without interruptions.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt="" />
                </div>
            </Slider>
        )
    }
}
export default Pserviceslider;