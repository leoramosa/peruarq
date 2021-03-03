/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// Import Swiper React components

import 'swiper/swiper.scss';
import './styles/services.css'
import './styles/project.css'
import Project1 from '../images/img-techo.png'
import Project2 from '../images/img-bonogas.png'
import Project3 from '../images/logo-techo-mobile.jpg'
import Project4 from '../images/logo-gas-mobile.jpg'
import com1 from '../images/pro1.jpg'
import com2 from '../images/pro2.jpg'
import com3 from '../images/pro3.jpg'
import com4 from '../images/pro4.jpg'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Projects () {

  return (
    <>
      <div className="content_services">
      <div className="service-header">
          <div className="projects_overlay">
          <div className="about_container">
              <p className="service_title-header">PROYECTOS <strong>SOCIALES</strong></p>
            </div>
          </div>
        </div>

        <div className="content-container-project">
          <p className="title-project">En peruarq realizamos la captacion de beneficiarios para proyectos sociales del estado como: </p>
          <div className="project_detail">
          <div className="content-project">
            <div className="project-info">
            <ul>
                <li>
               Construcción de viviendas a través del programa del ministerio de vivienda
                </li>
              </ul>
            
            </div>
            <div className="project-img">
            <div className="link-project">
                más información
              </div>
              <img className="img-desktop" src={Project1} alt=""/>
              <img className="img-mobile" src={Project3} alt=""/>
            </div>
          </div>
          <div className="content-project">
            <div className="project-info">
              <ul>
                <li>
                Instalación de sistema de gas a través del programa del ministerio de energía y minas. 
                </li>
              </ul>
           
            </div>
            <div className="project-img">
              <div className="link-project">
                más información
              </div>
              <img className="img-desktop" src={Project2} alt=""/>
              <img className="img-mobile"  src={Project4} alt=""/>
            </div>
          </div>
          </div>
        </div>
        <div className="logos_company">
          <div className="img-logs-com">
            <img src={com1} alt=""/>
          </div>
          <div className="img-logs-com">
            <img src={com2} alt=""/>
          </div>
          <div className="img-logs-com">
            <img src={com3} alt=""/>
          </div>
          <div className="img-logs-com">
            <img src={com4} alt=""/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects;