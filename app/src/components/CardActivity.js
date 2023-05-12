import React from "react";

function CardActivity(props) {
    return (
        <div className="row" class="row justify-content-center">
            <div className="col-lg-14 mb-1">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body" style={{ background: "#02094650" }}>{props.name}</div>
                    <div className="card bg-dark text-white shadow">
                        <img className="img" src={props.image} alt="Trekking" width="100%" style={{ height: "250px" }} />
                        <div className="card-body" style={{ background: "#02094650" }} >{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardActivity;