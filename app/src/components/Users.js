import React from "react";
import CardUser from "./CardUser";
import '../assets/css/userStyle.css' 


function Users() {    
    const [users, setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3001/api/users')
        .then((res)=>res.json())
        .then(info =>{
          setUsers(info.data);
        })
    },[])
  
  return (
    <div className="col-lg-6 mb-5" >
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
        Usuarios
          </h5>
        </div>
        <div className="card-body-user">
          {users.map((user,i)=><CardUser key={i} {...user} />)}        
          {/* ...activity es equivalente a  name={activity.name} image={activity.image} description={activity.description}*/ }
        </div>
      </div>
    </div>
  );
}

export default Users

