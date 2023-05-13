import React from 'react';
import "../assets/css/footer.css";
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                
                    <div className="footer-col">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="/">Inicio</a></li>
							<li><a href="/AboutUsTurismoAventura">Quienes somos</a></li>
							<li><a href="/Activities">Actividades</a></li>
							<li><a href="/Users">Usuarios</a></li>
                        </ul>
                    </div>
					
                </div>
				
            </div>
			
          <div className="text-center my-auto">
            <span>© Turismo Aventura</span>
          </div>
        </footer>
    );
}

export default Footer;
