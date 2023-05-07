import React from 'react';
import AboutUsTurismoAventura from './AboutUsTurismoAventura';
import Activities from './Activities';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <AboutUsTurismoAventura/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Activities />

        </div>
    )
}

export default ContentRowCenter;