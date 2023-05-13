import React from 'react';
import Activities from './Activities';
import Users from './Users';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}

            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Activities />
            <Users />

        </div>
    )
}

export default ContentRowCenter;