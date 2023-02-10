import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
// import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/pages/HomePage.css';
import '../../src/styles/components/pages/HomePage.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

const HomePage = (props) => {
    const [scrollTop, setScrollTop] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = (event) => {
        // var scrollTop = document.getElementById('test').scrollTop;
        var scrollHeight = document.getElementById('test').scrollHeight; // added
        var offsetHeight = document.getElementById('test').offsetHeight;
          setScrollTop(window.scrollY);
          if((scrollHeight - offsetHeight)<=window.scrollY){
            console.log("NEXT PAGE")
            navigate('/nosotros', { replace: true });
          }
        //   console.log(window.outerHeight)
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return (
    <main className="holderHome" id = 'test'>
        {/* <h1>{scrollTop}</h1> */}
        <Navbar default="/" navBarHomeClass="active" ></Navbar>
        <img src="../../img/neonHello copy.jpeg" className="neonHello"></img>
        <div className="homeBottom" >
            <Footer ></Footer>
        </div>
    </main>
    );
}

export default HomePage;
