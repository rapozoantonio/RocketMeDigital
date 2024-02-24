import React, {Component} from 'react';
import Sectitle from '../../Title/Sectitle'
import Pserviceslider from './Pserviceslider';

class Sservice extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="Soluções Web que Geram Resultados Reais" TitleP="Acelere vendas, amplie seu alcance e garanta operações ininterruptas com nossas soluções."
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <Pserviceslider/>
                </div>
            </section>
        )
    }
}
export default Sservice;
