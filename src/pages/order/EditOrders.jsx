import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import './EditCategory.css'

const EditCategory = () => {
  let history = useHistory();
  const { orderId } = useParams();
  const [orders, setOrder] = useState({
    customerId:"",
    productId:"",
    description:"",
    orderNumber:"",
    total:"",
    orderDate:"",
    shipDate:"",
    paid:"",
    paymentDate:"",
    note:"",
  });

  const {customerId, orderDate, shipDate, productId, orderNumber,total, transactionstatusId, paid, paymentDate, note } = orders;
  const onInputChange = e => {
    setOrder({ ...orders, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const onSubmit = async e => {
    // e.preventDefault();
    await axios.put(`https://localhost:44380/api/Orders/${orderId}`, orders);
    history.push("/");
  };

  const loadOrders = async () => {
    const result = await axios.get(`https://localhost:44380/api/Orders/${orderId}`);
    setOrder(result.data);
  };
  return (
    <div className="container">
      <div className="main mx-auto shadow p-5">
        
        <form className="Login-form" onSubmit={e => onSubmit(e)}>
        <h2 className="header-form">Edit Order: {orderId}</h2>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="customerId"
              name="customerId"
              value={customerId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="productId"
              name="productId"
              value={productId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="orderNumber"
              name="orderNumber"
              value={orderNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group"> 
            <input
              type="text"
              className="Login-form-control"
              placeholder="total"
              name="total"
              value={total}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="transactionstatusId"
              name="transactionstatusId"
              value={transactionstatusId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="orderDate"
              name="orderDate"
              value={orderDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="shipDate"
              name="shipDate"
              value={shipDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="paid"
              name="paid"
              value={paid}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="paymentDate"
              name="paymentDate"
              value={paymentDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="note"
              name="note"
              value={note}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <button className="Login-form-submit">Update User</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
