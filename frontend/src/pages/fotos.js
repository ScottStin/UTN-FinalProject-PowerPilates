import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '../styles/components/pages/Fotos.css';
import { useRef, useEffect, useState } from 'react';

const FotosPage = (props) => {      
    const fotos = [
        "https://source.unsplash.com/random/?pilates#1",
        "https://source.unsplash.com/random/?pilates#2",
        "https://source.unsplash.com/random/?pilates#3",
        "https://source.unsplash.com/random/?pilates#4",
        "https://source.unsplash.com/random/?pilates#5",
        "https://source.unsplash.com/random/?pilates#6",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#7",
        "https://source.unsplash.com/random/?pilates#8"
    ]     

        const [scrollTop, setScrollTop] = useState(0);
        useEffect(() => {
            const handleScroll3 = (event) => {
            var scrollTop = document.getElementById('test3').scrollTop;
            var scrollHeight = document.getElementById('test3').scrollHeight; // added
            var offsetHeight = document.getElementById('test3').offsetHeight;
            console.log(scrollTop)
            console.log(scrollHeight - offsetHeight)
            console.log(offsetHeight)
              setScrollTop(window.scrollY);
              console.log(window.scrollY)
              if((scrollHeight - offsetHeight)<=window.scrollY){
                console.log("NEXT PAGE3")
              }
            //   console.log(window.outerHeight)
            };
        
            window.addEventListener('scroll', handleScroll3);
        
            return () => {
              window.removeEventListener('scroll', handleScroll3);
            };
          }, []);

    return (
        // <main className="holderContacto">
       
            <main className="fotoHolder" id= 'test3'>
                
                <Navbar default="/fotos">
                </Navbar>
                <div class="container mt-5">
                    <div className="photoRows row pt-0">
                    {fotos.map((item) => 
                        
                        <div className="col-3 p-2">
                           <img className = "foto rounded" src={item} alt="" />
                            
                        </div>
                    
                    )}
                    </div>
                </div>
             
                    
                <div className = "contactBottom">
                    <Footer></Footer>
                </div>
            </main>
        // </main >
    );
}

export default FotosPage;