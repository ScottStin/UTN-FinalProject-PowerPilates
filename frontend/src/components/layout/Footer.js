import React from 'react'
import '../../styles/components/layout/Footer.css' 
///Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/Footer.css
import { useRef, useEffect, useState } from 'react';

const Footer = (props) => {

    // const [scrollTop, setScrollTop] = useState(0);
    // useEffect(() => {
    //     const handleScroll = (event) => {
    //     var scrollTop = document.getElementById('test').scrollTop;
    //     var scrollHeight = document.getElementById('test').scrollHeight; // added
    //     var offsetHeight = document.getElementById('test').offsetHeight;
    //     console.log(scrollTop)
    //     console.log(scrollHeight)
    //     console.log(offsetHeight)
    //       setScrollTop(window.scrollY);
    //       console.log(window.scrollY)
    //     //   console.log(window.outerHeight)
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    return (
        <footer className="pie" id='test'>
           <div className="columnas">
                <div className="col-7 leftFooter">
                    <ul className="datosContacto">
                        <li>Whatsapp: 600 41 17 89</li>
                        <li>Email: silviadannapowerpilates@gmail.com</li>
                        <li>Facebook: Silvia D'Anna Power Pilates</li>
                        <li>Instagram: <a href="https://www.instagram.com/silviadannapowerpilates/" target="_blank">Power Pilates Silvia D'Anna</a></li>
                    </ul>
                </div> 
                <div className="col-5 rightFooter">
                    <ul className="datosLocal">
                        <li>Lunes - Viernes</li>
                        <li>Rúa de Barcelona, 44, bajo</li>
                        <li>36203 Vigo, Pontevedra</li>
                    </ul>
                </div>
          </div>
        </footer>
    );
}

export default Footer;