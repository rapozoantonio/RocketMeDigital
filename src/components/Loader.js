import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';
import Service from '../components/Service/Service';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';


const Loader = () => {
    return(
        <div id="preloader">
          <div id="ctn-preloader" class="ctn-preloader">
            <div class="animation-preloader">
              <div class="spinner"></div>
              <div class="txt-loading">
                <span data-text-preloader="R" class="letters-loading">
                R
                </span>
                <span data-text-preloader="O" class="letters-loading">
                O
                </span>
                <span data-text-preloader="C" class="letters-loading">
                C
                </span>
                <span data-text-preloader="K" class="letters-loading">
                K
                </span>
                <span data-text-preloader="E" class="letters-loading">
                E
                </span>
                <span data-text-preloader="T" class="letters-loading">
                T
                </span>
                <span data-text-preloader="M" class="letters-loading">
                M
                </span>
                <span data-text-preloader="E" class="letters-loading">
                E
                </span>
              </div>
              <p class="text-center">digital</p>
            </div>
          </div>
    </div>
    )
}
export default Loader;