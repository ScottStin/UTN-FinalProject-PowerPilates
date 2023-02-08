import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '../styles/components/pages/Fotos.css';

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


    return (
        // <main className="holderContacto">
       
            <main className="fotoHolder">
                
                <Navbar default="/fotos">
                </Navbar>
                <div class="container mt-5">
                    <div class="row pt-5">
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