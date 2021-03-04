import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles/home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AppContext from "../context/AppContext";
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
  const {state} =useContext(AppContext)
  const { serviceTwo } = state;


  return (
    <>

      <div className="content_home">
        <div className="Navbarhome">
        <NavBar/>
        </div>
        <div className="Home_container">
        <div className="swiper_content_app">
          <Swiper
             /*  effect="fade" */
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay= {{
                delay: 3000,
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
                    <div className="content_one">
                    <p className="info_title">DISEÑO</p>
                    <p className="info_paragraph">Arquitectos especialista en diseño integral, exteriores, interiores, urbanismo, paisajismo, potenciacion de marca</p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Architects specialized in integral design, exteriors, interiors, urbanism, landscaping, brand enhancement
                      </p>
                      <p className="tra_language">
                      专门从事整体设计，外观，室内设计，城市化，美化环境，品牌提升的建筑师
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios" >
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                      Architects specialized in integral design, exteriors, interiors, urbanism, landscaping, brand enhancement
                     </div>
                     <div className="chino">
                    专门从事整体设计，外观，室内设计，城市化，美化环境，品牌提升的建筑师
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
                    <div className="content_one">
                    <p className="info_title">EDIFICACIONES</p>
                    <p className="info_paragraph">Obras de arquitectura y de ingenieria en general, habilitaciones urbanas </p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Architecture and engineering works in general, urban facilities
                      </p>
                      <p className="tra_language">
                      一般建築和工程工作，城市設施
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios">
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                      Architecture and engineering works in general, urban facilities
                     </div>
                     <div className="chino">
                     一般建築和工程工作，城市設施
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
                    <div className="content_one">
                    <p className="info_title">PAVIMENTACIÓN</p>
                    <p className="info_paragraph">Asfaltado de carreteras, intercambios viales, vias urbanas, estacionamientos. </p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Asphalting roads, interchanges, urban roads, parking lots
                      </p>
                      <p className="tra_language">
                      柏油路，立交桥，城市道路，停车场
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios">
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                       Asphalting roads, interchanges, urban roads, parking lots
                     </div>
                     <div className="chino">
                     柏油路，立交桥，城市道路，停车场
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
                    <div className="content_one">
                    <p className="info_title">ELECTRIFICACIÓN</p>
                    <p className="info_paragraph">Redes eléctricas, estaciones eléctricas, instalaciones domiciliarias  </p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Power grids, power stations, home installations
                      </p>
                      <p className="tra_language">
                      电网，电站，家庭设施
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios">
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                     Power grids, power stations, home installations
                     </div>
                     <div className="chino">
                     电网，电站，家庭设施
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
                    <div className="content_one">
                    <p className="info_title">MINERÍA</p>
                    <p className="info_paragraph"> Brindando diferentes servicios con los cuidados ambientales requeridos.  </p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Providing different services with the required environmental care
                      </p>
                      <p className="tra_language">
                      提供所需的环境保护服务
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios">
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                     Providing different services with the required environmental care
                     </div>
                     <div className="chino">
                     提供所需的环境保护服务
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
                    <div className="content_one">
                    <p className="info_title">SANEAMIENTO</p>
                    <p className="info_paragraph">Tendiendo redes sanitarias, ptar, cisternas, rellenos sanitarios. </p>
                    <div className="traduction_app">
                      <p className="tra_language">
                      Tending sanitary networks, ptar, cisterns, sanitary landfills
                      </p>
                      <p className="tra_language">
                      抚养卫生网络，ptar，水箱，卫生垃圾填埋场
                      </p>
                    </div>
                    <div className="button_plus">
                      <Link to="/servicios">
                        <button type="button">
                          Ver más
                        </button>
                      </Link>
                    </div>
                    </div>
                    <div className="contentTwo">
                     <div className="ingles">
                      Tending sanitary networks, ptar, cisterns, sanitary landfills
                     </div>
                     <div className="chino">
                     抚养卫生网络，ptar，水箱，卫生垃圾填埋场
                     </div>
                    </div>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="projects">
            <p className="project_title">SERVICIOS DESTACADOS</p>
            <div className="project_count">
              <div className="project_box">
                <div className="project_img one">
                <div className="project_img_content">
                CONTRATISTAS GENERALES
                  </div>
                </div>
                <div className="project_info">
                  
                  <a href={`https://api.whatsapp.com/send?phone=51993861447&text=${serviceTwo[0].mensaje}${serviceTwo[0].name}`} rel="noopener noreferrer" target="_blank" className="project_plus" >más información</a>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img two">
                <div className="project_img_content">
                PROYECTOS SOCIALES
                  </div>
                </div>
                <div className="project_info">
               
                  <a href={`https://api.whatsapp.com/send?phone=51993861447&text=${serviceTwo[1].mensaje}${serviceTwo[1].name}`} rel="noopener noreferrer" target="_blank" className="project_plus" >más información</a>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img three">
                  <div className="project_img_content">
                  DISEÑO Y CONSTRUCCIÓN PARA EMPRESAS
                  </div>
                </div>
                <div className="project_info">
                
                  <a href={`https://api.whatsapp.com/send?phone=51993861447&text=${serviceTwo[2].mensaje}${serviceTwo[2].name}`} rel="noopener noreferrer" target="_blank"  className="project_plus" >más información</a>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img four">
                  <div className="project_img_content">
                  CONSULTORIÍAS Y EJECUCIONES PARA EL ESTADO
                  </div>
                </div>
                <div className="project_info">
                
                  <a href={`https://api.whatsapp.com/send?phone=51993861447&text=${serviceTwo[3].mensaje}${serviceTwo[3].name}`} rel="noopener noreferrer" target="_blank" className="project_plus" >más información</a>
                </div>
              </div>
            </div>
            <div className="project_button">
              <Link to="/servicios">
                <button type="button">
                  ver más servicios
                </button>
              </Link>
            </div>
          </div>
          </div>
          <Footer/>
      </div>
      
     
    </>
  )
}

export default Home;