import React from "react";

function CardUser(props) {
    return (
        <div className="row" class="row justify-content-center rowUser">
            <div className="col-lg-14 mb-1">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body" style={{ background: "#02094650" }}>{props.name} {props.surname}</div>
                    <div className="card bg-dark text-white shadow">
                    <img className="imgUser" src={props.avatar} alt="foto" />
                        <div style={{ background: "#02094650" }} >Email: {props.email}</div>
                        <div style={{ background: "#02094650" }} >Telefono: {props.tel}</div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardUser