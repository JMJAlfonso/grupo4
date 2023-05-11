import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Activities in DB --> */

let activitiesInDB = {
    title: 'Actividades',
    color: 'primary',
    cuantity: 8,
    icon: 'fa-clipboard-list',
    api:'products'
}

/* <!-- Total dificulties --> */

let dificulties = {
    title: 'Dificultad',
    color: 'success',
    cuantity: '4',
    icon: 'fa-award',
    api:'dificulties'
}

/* <!-- Users quantity --> */

let usersQuantity = {
    title: 'Usuarios',
    color: 'warning',
    cuantity: 'Personas :V',
    icon: 'fa-user-check',
    api:'users'
}

let cartProps = [activitiesInDB, dificulties, usersQuantity];

function ContentRowMovies() {    

    return (

        <div className="row">

            {cartProps.map((api, i) => {

                return <SmallCard {...api} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;