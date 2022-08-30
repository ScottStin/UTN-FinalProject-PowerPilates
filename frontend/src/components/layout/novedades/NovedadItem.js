import React from 'react';
import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/NovedadesItem.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props; //chequear nombre IMAGEN por las dudas
    return (


        <div className="container card p-3 mb-5 mt-1 flex bg-white rounded shadow flex">
            <div className="row">
                <div className="col-4">
                    <img className="p-3" src={imagen} />
                </div>
                <div className="col-8 p-5" >
                    <h5 class="card-title mb-3"><b>{title}</b></h5> <hr></hr>
                    <p class="text-muted mb-3"><i>{subtitle}</i></p> 
                    <p dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </div>
        </div>

    );
}

export default NovedadItem;