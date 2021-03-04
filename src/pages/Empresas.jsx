/* eslint-disable jsx-a11y/alt-text */
import React  from 'react'



import './styles/services.css'
import './styles/empresas.css'

import empresa1 from '../images/empresas1.jpg'
import empresa2 from '../images/empresas2.jpg'
import empresa3 from '../images/empresas3.jpg'
import empresa4 from '../images/empresas4.jpg'
import empresa5 from '../images/empresas5.jpg'

import clien1 from '../images/1x/clien1.jpg'
import clien2 from '../images/1x/clien2.jpg'
import clien3 from '../images/1x/clien3.jpg'
import clien4 from '../images/1x/clien4.jpg'
import clien5 from '../images/1x/clien5.jpg'
import clien6 from '../images/1x/clien6.jpg'
import clien7 from '../images/1x/clien7.jpg'
import clien8 from '../images/1x/clien8.jpg'
import clien9 from '../images/1x/clien9.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);
function Empresas () {

  return (
    <>
      <div className="content_services">
      <div className="service-header">
          <div className="empresas_overlay">
          <div className="about_container">
              <p className="service_title-header">EMPRESAS <strong>PRIVADAS</strong></p>
            </div>
          </div>
        </div>

        <div className="content-empresa">
          <div className="empresas-container">
            <div className="banner-empresas">
                <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                 /* autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
              }} */
                pagination={{ clickable: true }}
               /*  scrollbar={{ draggable: true }} */

                /* onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} */
                >
                <SwiperSlide>
                  <img src={empresa1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={empresa2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={empresa3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={empresa4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={empresa5} alt=""/>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="info-empresas">
              <div className="info-text">En Peruarq contamos con un equipo de profesionales especializados en diseño, asesoría y construcción.</div>
            </div>
          </div>
        </div>
        <div className="parallax_content">
            <div className="parallax_overlay">
          <div className="parallax_container">
          Nuestra misión es ejecutar conforme a las necesidades y requerimientos del cliente, realizando un presupuesto de acuerdo al alcance que se desea ejecutar.
            </div>
          </div>
        </div>
        <div className="clients">
          <p className="title_clients">Principales Clientes</p>
          <div className="clients_container">
            <div className="img-clients">
              <a href="https://glperu.com/" rel="noopener noreferrer" target="_blank">
                <img src={clien1} alt=""/>
              </a>
            </div>
            <div className="img-clients">
              <a href="https://peru.angloamerican.com/es-es" rel="noopener noreferrer" target="_blank">
                <img src={clien2} alt=""/>
              </a>
            </div>
            <div className="img-clients">
            <a href="https://es-la.facebook.com/pg/Fixer-SAC-203350183336454/about/?ref=page_internal" rel="noopener noreferrer" target="_blank">
                <img src={clien3} alt=""/>
              </a>
            </div>
            <div className="img-clients">
            <a href="https://inmobiliariagarciaasociados.com/" rel="noopener noreferrer" target="_blank">
                <img src={clien4} alt=""/>
              </a>
            </div>
            <div className="img-clients">
            
                <img src={clien5} alt=""/>
              
            </div>
            <div className="img-clients">
            
                <img src={clien6} alt=""/>
              
            </div>
            <div className="img-clients">
            <a href="https://www.facebook.com/pg/betonhaus.peru/about/?ref=page_internal" rel="noopener noreferrer" target="_blank">
                <img src={clien7} alt=""/>
              </a>
            </div>
            <div className="img-clients">
            <a href="https://www.rustica.com.pe/" rel="noopener noreferrer" target="_blank">
                <img src={clien8} alt=""/>
              </a>
            </div>
            <div className="img-clients">
            <a href="https://derco.com.pe/" rel="noopener noreferrer" target="_blank">
                <img src={clien9} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Empresas;