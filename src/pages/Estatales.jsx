/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


import './styles/services.css'
import './styles/entidades.css'

import enti1 from '../images/1x/enti1.jpg'
import enti2 from '../images/1x/enti2.jpg'
import enti3 from '../images/1x/enti3.jpg'
import enti4 from '../images/1x/enti4.jpg'
import enti5 from '../images/1x/enti5.jpg'
import enti6 from '../images/1x/enti6.jpg'
import enti7 from '../images/1x/enti7.jpg'
import enti8 from '../images/1x/enti8.jpg'
import enti9 from '../images/1x/enti9.jpg'
import enti10 from '../images/1x/enti10.jpg'



function Estatales () {


  return (
    <>
      <div className="content_services">
      <div className="service-header">
          <div className="entidades_overlay">
          <div className="about_container">
              <p className="service_title-header">ENTIDADES <strong>ESTATALES</strong></p>
            </div>
          </div>
        </div>

        <div className="clients">
          <p className="title_clients">Principales Entidades</p>
          <div className="text_content_clients">Peruarq es una empresa inscrita en el registro nacional de proveedores del estado – rnp, 
            realizamos todo tipo de consultorías, formulación de perfiles, elaboramos expedientes técnicos de obra, 
            brindamos servicios diversos a toda entidad estatal, participamos en licitaciones y realizamos todo tipo de
            ejecuciones de obras a nivel nacional e internacional.</div>
          <div className="entidades_container">
            <div className="img-entidades">
              <img src={enti1} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti2} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti3} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti4} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti5} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti6} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti7} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti8} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti9} alt=""/>
            </div>
            <div className="img-entidades">
              <img src={enti10} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Estatales;