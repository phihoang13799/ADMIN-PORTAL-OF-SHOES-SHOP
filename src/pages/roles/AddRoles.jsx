import React from 'react';

import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
// import './AddCategory.css'

const AddRoles =({}) =>{
    
    let history = useHistory();
  const [roles, setRoles] = useState({
    roleName:"",
    description:"",
  });
  
  const {roleName,  description } = roles;
  const onInputChange = e => {
    
    setRoles({ ...roles, [e.target.name]: e.target.value });
    
  };

    const onSubmit = async e => {
        // e.preventDefault();
        console.log(roles);
        await axios.post(`https://localhost:44380/api/Roles`,roles)
        // contentType: "application/json"
        .catch((err) => {
            console.log("Err: ", err);
          });

        history.push("/");
      };
    return(

        <div className="container">
            <div className="main">
              <form className="Login-form" onSubmit={e => onSubmit(e)}>
              <h3 className="form-title">Add Role</h3>
              <div className="Login-form-group">
                  <label>RoleName</label>
                  <input className="Login-form-control" value={roleName} type='text' name="roleName" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>Description</label>
                  <input className="Login-form-control" value={description} type='text'  name="description" onChange={e => onInputChange(e)}/>
              </div>
              <div className="form-group">
                <button className="Login-form-submit" type="submit">Add</button>
              </div>
              
            <hr />
      </form>
            </div>
            
        </div>
    )
}

export default AddRoles;