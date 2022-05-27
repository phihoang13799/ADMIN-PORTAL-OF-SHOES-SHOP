import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import './EditCategory.css'

const EditCategory = () => {
  let history = useHistory();
  const { roleId } = useParams();
  const [roles, setRoles] = useState({
    roleName:"",
    description:"",
  });

  const { description, roleName} = roles;
  const onInputChange = e => {
    setRoles({ ...roles, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadRole();
  }, []);

  const onSubmit = async e => {
    // e.preventDefault();
    await axios.put(`https://localhost:44380/api/Roles/${roleId}`, roles);
    history.push("/");
  };

  const loadRole = async () => {
    const result = await axios.get(`https://localhost:44380/api/Roles/${roleId}`);
    setRoles(result.data);
  };
  return (
    <div className="container">
      <div className="main mx-auto shadow p-5">
        
        <form className="Login-form" onSubmit={e => onSubmit(e)}>
        <h2 className="header-form">Edit Roles: {roleId}</h2>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="roleName"
              name="roleName"
              value={roleName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <button className="Login-form-submit">Update Roles</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditCategory;