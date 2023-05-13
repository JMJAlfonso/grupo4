import React from "react";
import '../assets/css/activityStyle.css'

function CardActivity(props) {
    return (
        <div className="row" class="justify-content-center rowActivities">
            <div className="col-lg-14 mb-1">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body cardActivity">{props.name}</div>
                    <div className="card bg-dark text-white shadow">
                        <img className="img" src={props.image} alt="foto" width="100%" style={{ height: "250px" }} />
                        <div className="card-body" style={{ background: "#02094650" }} >{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardActivity;