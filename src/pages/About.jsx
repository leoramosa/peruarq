import React from 'react'
import './styles/about.css'
import imgAbout from '../images/about-only.jpg'
import { Link } from 'react-router-dom'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        
        <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Nuestra <strong>Historia</strong></p>
              <p className="about_info">Nuestra experiencia en el campo de la Ingeniería </p>
              <br/>
              <div className="link_contact">
              <Link to="/contacto" className="" >
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        </div>
        <div className="about_information">
          <div className="row_about">
       <p>
       somos una empresa familiar dedicada a brindar servicios de diseño integral, consultoria, asesorias, supervisiones, auditorias, seguridad y salud ocupacional, medio ambiente, arqueologia, geotecnia.
construcción, edificación, obras de Ingeniería, remodelación, ampliación, mejoramiento, mantenimiento, entre otros afines.
<br/><br/>
en peruarq, contamos con un equipo de profesionales, técnicos y obreros especializados en temas de construcción:

       </p>
       <p className="second_title">Nuestro Equipo</p>
       <div className="persons">
      <div className="column1">
              	Gerente general
                <br/>
              	Gerente comercial
                <br/>
              	Gerente de proyectos
                <br/>
              	Gerente tecnología
                <br/>
                Gerente de gestión	
                <br/>
              	Gerente operaciones
                <br/>
              	Gerente de diseños
                <br/>
              	Administración
                <br/>
              	Contabilidad
                <br/>
              	Arquitectura
                <br/>
              	ng. estructural
                <br/>
              	Ing. sanitario
                <br/>
              	Ing. electrico
                <br/>
              	Ing. geotécnia - suelos
                <br/>
              	Ing. prevención
                <br/>
            	  Ing. ssoma
      </div>
      <div className="persons-name">
        Ricardo Taboada Gutiérrez.
        <br/>
        Consuelo taboada gutiérrez
        <br/>
        Javier tokumori pina
        <br/>
        stefan coral jaimes.
        <br/>
        francisco gonzales zubiate
        <br/>
        arturo ortega flores.
        <br/>
        marilyn vilca vargas
        <br/>
        alison bravo risso
        <br/>
        nancy nadia niño
        <br/>
        adolfo taboada palacios
        <br/>
        luis martinez lujan
        <br/>
        arturo chino iman
        <br/>
        ladislao quispe aguirre
        <br/>
        jose bondy esquerre
        <br/>
        Juan Benate Galvez
        <br/>
        Joel Rodriguez Mazetti
      </div>
       </div>
          </div>
          <div className="row_about">
            <div className="img_about">
              <img src={imgAbout} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;