import React from 'react'
import './styles/home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);



 const Home = () => {
  return (
    <>

      <div className="content_home">
        <div className="Navbarhome">
        <NavBar/>
        </div>
        <div className="Home_container">
        <div className="swiper_content_app">
          <Swiper
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="swiper_container-box"
            >
              <SwiperSlide className="swiper_container-box_1">
                <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">DISEÑO</p>
                    <p className="info_paragraph">Arquitectos especialista en diseño integral, exteriores, interiores, urbanismo, paisajismo, potenciacion de marca</p>
                    <div className="button_plus">
                      <a href >
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_2">
              <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">EDIFICACIONES</p>
                    <p className="info_paragraph">Obras de arquitectura y de ingenieria en general, habilitaciones urbanas </p>
                    <div className="button_plus">
                      <a href>
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_3">
              <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">PAVIMENTACION</p>
                    <p className="info_paragraph">Asfaltado de carreteras, intercambios viales, vias urbanas, estacionamientos. </p>
                    <div className="button_plus">
                      <a href>
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_4">
              <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">ELECTRIFICACION</p>
                    <p className="info_paragraph">Redes eléctricas, estaciones eléctricas, instalaciones domiciliarias  </p>
                    <div className="button_plus">
                      <a href>
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_5">
              <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">MINERIA</p>
                    <p className="info_paragraph"> Brindando diferentes servicios con los cuidados ambientales requeridos.  </p>
                    <div className="button_plus">
                      <a href>
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper_container-box_6">
              <div className="overlay">
                <div className="img_slide">
                  
                  <div className="img_info">
                    <div className="">
                    <p className="info_title">SANEAMIENTO</p>
                    <p className="info_paragraph">Tendiendo redes sanitarias, ptar, cisternas, rellenos sanitarios. </p>
                    <div className="button_plus">
                      <a href>
                        <button type="button">
                          Ver más
                        </button>
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>
          <Footer/>
      </div>
      
     
    </>
  )
}

export default Home;