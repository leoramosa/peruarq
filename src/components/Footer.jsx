import React from 'react'
import './styles/footer.css'
import './styles/Footertwo.scss'
import { Link } from "react-router-dom";
 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         <div className="info">
           <p className="title-info">Contáctame</p>
           <div className="">
            <div className="">
            <p className="a-link"><i class="fas fa-phone-alt"></i> +51 993 861 447  |  +51 947 418 025</p>
            <p className="a-link"><i class="fas fa-phone-alt"></i> +34 639 44 29 21</p>
            </div>
            <div className="">
            <p className="a-link"><i class="far fa-envelope"></i> gerencia@peruarq.com</p>
            <p className="a-link"><i class="far fa-envelope"></i> comercial@peruarq.com</p>
            </div>
           </div>
         </div>
         <div className="explorer">
           <p className="title-info">Dirección</p>
           <div className="link-footer">
            <Link className="footerLink" to="/s"><p className="a-link"><i class="fas fa-map-marker-alt"></i> Av. Centenario 150, La Molina - Lima, Perú</p></Link> 
            <Link className="footerLink" to="/s"><p className="a-link"><i class="fas fa-map-marker-alt"></i> Av. 25 de Noviembre N° A-8,<br/>Los Angeles, Moquegua - Perú</p></Link> 
            <Link className="footerLink" to="/s"><p className="a-link"><i class="fas fa-map-marker-alt"></i> Calle Primavera 5-1 D, Sevilla, España</p></Link> 
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Sígueme:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
            </div>
         </div>

         
       </div>
       <div className="derechos desktop">
         <p> Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a> | © Copyright Peruarq 1999 - 2021 | Todos los derechos reservados</p>
        
       </div>

       </div>
     </div>
    </>
  )
}

export default Footer;
