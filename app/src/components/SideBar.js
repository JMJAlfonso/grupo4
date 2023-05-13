import React from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/images/logo.jpg';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style={{ background: "#02094691" }}>

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img style={{ width: '120px' }} src={image} alt="Turismo Aventura" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className></i>
                        <span> Dashboard - Los Messianos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menú</div>

                {/*<!-- Nav Item - Categorias -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className='fas fa-fw fa-home'></i>
                        <span>Inicio</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Actividades -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/AboutUsTurismoAventura">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>¿Quiénes somos?</span></Link>
                </li>
                {/*<!-- Nav Item - Tabla -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Activities">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Actividades</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Users">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span></Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Campeones">
                        <i className='fas fa-fw fa-hourglass-end'></i>
                        <span>Fin</span></Link>
                </li>
            </ul>

        </React.Fragment>
    )
}
export default SideBar;