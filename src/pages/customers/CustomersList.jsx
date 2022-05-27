import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {getCustomers} from "../../redux/actions/customersAction";
// import './CategoryList.css'
// import Customers from '../customers/Customers'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const CustomersList = () => {
  const customers = useSelector((state) => state.allCustomers.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCustomers();
  }, []);
  const fetchCustomers = async () => {
    const response = await axios
      .get("https://localhost:44380/api/Customers")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getCustomers(response.data));
  };
  
  console.log("Customers :", customers);
  const deleteCustomer = async customerId => {
    const response = await axios.delete(`https://localhost:44380/api/Customers/${customerId}`);
    // dispatch(deleteCustomers(response.data))
    fetchCustomers();
  };
  const renderList = customers.map((customer) => {
    const { createDate, email, password, active, roleId, phone,address,avatar, customerId, birthday, fullname } = customer;
    return (
      <tbody className="four wide column" key={customerId}>
          <tr>
                        <td className="table-item">{customerId}</td>
                        <td className="table-item">{fullname}</td>
                        <td className="table-item">{birthday}</td>
                        <td className="table-item">{phone}</td>
                        <td className="table-item">{address}</td>
                        <td className="table-item">{active}</td>
                        <td className="table-item">{createDate}</td>
                        <td className="table-item">{avatar}</td>
                        <td className="table-item">{roleId}</td>
                        {/* <td className="table-item">{email}</td> */}
                        {/* <td className="table-item">{password}</td> */}
                        <td className="table-item">
                          {/* <Link to={`/editcustomers/${customerId}`}>
                            <Button variant="contained" color="success">
                              Edit
                            </Button>
                          </Link> */}
                          <Link style={{textDecoration: 'none'}} to={`/editcustomers/${customerId}`}>
                            <Button variant="contained" color="success">
                              Edit
                            </Button>
                          </Link>
                            <Button onClick={() => deleteCustomer(customerId)} variant="outlined" startIcon={<DeleteIcon />}>
                              Delete
                            </Button>
                        </td>
            </tr>
      </tbody>
    );
  });
  return <>
  <div>
    <h2 className="header">CUSTOMERS LIST</h2>
    <div><br></br></div>
    <table className="table">
    <thead className="table-header">
                        <tr >
                        <th className="table-item-header">CustomerID</th>
                        <th className="table-item-header">Customer Name</th>
                        <th className="table-item-header">Birthday</th>
                        <th className="table-item-header">Phone</th>
                        <th className="table-item-header">Address</th>
                        <th className="table-item-header">Active</th>
                        <th className="table-item-header">CreateDate</th>
                        <th className="table-item-header">Avatar</th>
                        <th className="table-item-header">RoleId</th>
                        {/* <th className="table-item-header">Email</th> */}
                        {/* <th className="table-item-header">Password</th> */}
                        <th className="table-item-header">Actions</th>
                        </tr>
          </thead>
      {renderList}
    </table>
      
  </div>
      
  
  </>;
};

export default CustomersList;