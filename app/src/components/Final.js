import React from 'react';
import imagenFondo from '../assets/images/argentina-campeon.jpg';
import '../assets/css/final.css'

function Final(){
    return(
        <div className="col-lg-6 mb-4" class="row justify-content-center">
            <div className="card shadow mb-4 contenedorFinal">
                <div className="card-header py-3 divEgresados">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center egresados">EGRESADOS 2023 - PROGRAMADOR WEB FULL STACK!!!</h5>
                </div>
                <div className="card-body">
                <div className="card-header py-3 divIntegrantes">
                    <h5 className="m-0 font-weight-bold text-gray-800 integrantes">Alfonso Lombardi - Fabian Loza - Yanina Andrade - Jaqueline Vazquez - Alejandro Sosa - Bruno Cabral</h5>
                </div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="Campeones"/>
                    </div>
                    <p>Muchas gracias a todos. Especialmente Andrey por la dedicacion y la paciencia que nos tuviste. Tambien a vos Matias por estar siempre a disposicion. Y Paul, como olvidarnos de paul que hizo el aguante todas las noches.. Gracias por hacer mas facil el recorrido y ayudarnos a alcanzar la meta. Ahora a celebrar como campeones del mundo!  </p>                    
                </div>
            </div>
        </div>
    )
}

export default Final;
