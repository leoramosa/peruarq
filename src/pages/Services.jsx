/* eslint-disable jsx-a11y/alt-text */
import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import AppContext from "../context/AppContext";
// Import Swiper React components

import 'swiper/swiper.scss';
import './styles/services.css'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;

  return (
    <>
      <div className="content_services">
      <div className="service-header">
          <div className="services-overlay ">
          <div className="about_container">
              <p className="service_title-header">NUESTROS <strong>SERVICIOS</strong></p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="services_detail">
          {services.map((service, i) => (
            <div className="box_content-service">
              <div className="box-container">
              <figure>
                  <img src={service.image} alt=""/>
              </figure>
              <div className="box_info">
                <div className="box_info-text">
                  <p className="title_box">{service.name}</p>
                  <p>{service.breve} </p>
                </div>
                <div className="button-service">
                  <Link>ver más</Link>
                </div>
              </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;