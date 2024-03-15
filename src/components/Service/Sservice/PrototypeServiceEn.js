import React, { Component } from 'react';
import Sectitle from '../../Title/Sectitle'
import PservicesliderEn from './PservicesliderEn';

class Sservice extends Component {
    render() {
        return (
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="Web Solutions That Generate Real Results" TitleP="Accelerate sales, expand your reach, and ensure uninterrupted operations with our solutions."
                        tClass="t_color3" sClass="sec_title text-center mb_70" />
                    <PservicesliderEn />
                </div>
            </section>
        )
    }
}
export default Sservice;
