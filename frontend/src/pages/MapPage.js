import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '../styles/components/pages/ContactoPage.css';
// import { useState } from 'react';
// import axios from 'axios';

const MapPage = (props) => {          
    

    return (
        // <main className="holderContacto">
       
            <main className = "mainMapPage">
                <Navbar default="/encontra">
                </Navbar>
                <div className="row">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe className = "map" width="100%" height="auto%" id="gmap_canvas" src="https://maps.google.com/maps?q=power%20pilates&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
                <div className = "contactBottom">
                    <Footer></Footer>
                </div>
            </main>
        // </main >
    );
}

export default MapPage;