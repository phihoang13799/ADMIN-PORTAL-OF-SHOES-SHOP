import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { customerId } = useParams();
  const [customers, setCustomer] = useState({
    fullname:"",
    phone:"",
    address:"",
    birthday:"",
    avatar:"",
    email:"",
    active:"",
    createDate:"",
    roleId:"",
    password:"",
  });

  const { createDate, email, password, active, roleId, phone,address,avatar, birthday, fullname } = customers;
  const onInputChange = e => {
    setCustomer({ ...customers, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    // e.preventDefault();
    await axios.put(`https://localhost:44380/api/Customers/${customerId}`, customers);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://localhost:44380/api/Customers/${customerId}`);
    setCustomer(result.data);
  };

  return (
    <div className="container">
      <div className="main  w-75 mx-auto shadow p-5">
        
        <form className="Login-form" onSubmit={e => onSubmit(e)}>
        <h2 className="header-form">Edit Customer: {customerId}</h2>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="fullname"
              name="fullname"
              value={fullname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="birthday"
            //   data-date-format="DD MMMM YYYY"
              name="birthday"
              value={birthday}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="file"
              className="Login-form-control"
              placeholder="avatar"
              name="avatar"
            //   value={avatar}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="email"
              className="Login-form-control"
              placeholder="email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="active"
              name="active"
              value={active}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="createDate"
              name="createDate"
            //   data-date-format="DD MMMM YYYY"
              value={createDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="roleId"
              name="roleId"
              value={roleId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group"> 
          <button className="Login-form-submit">Update Customer</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

