import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {getOrders} from "../../redux/actions/ordersAction";
// import './CategoryList.css'
// import Orders from './Orders'
import { Link } from "react-router-dom";

const OdersList = () => {
  const orders = useSelector((state) => state.allOrders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    const response = await axios
      .get("https://localhost:44380/api/Orders")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getOrders(response.data));
  };
  console.log("Orders :", orders);
  const deleteOrder = async orderId => {
    const response = await axios.delete(`https://localhost:44380/api/Orders/${orderId}`);
    // dispatch(deleteOrders(response.data))
    fetchOrders();
  };
  
  const renderList = orders.map((order) => {
    // const {orderId, customerId, orderDate, shipDate, productId, orderNumber,total, transactionstatusId, deleted, paid, paymentDate, note} = order;
    return (
      <tbody className="four wide column" key={order.orderId}>
          <tr>
                        <td className="table-item">{order.orderId}</td>
                        <td className="table-item">{order.customerId}</td>
                        <td className="table-item">{order.totalOrder}</td>
                        <td className="table-item">{order.orderDate}</td>
                        <td className="table-item">{order.shipDate}</td>
                        <td className="table-item">{order.transactionStatusId}</td>
                        <td className="table-item">{order.paid}</td>
                        <td className="table-item">{order.paymentDate}</td>
                        <td className="table-item">{order.note}</td>
                        <td className="table-item">
                          <Link to={`/editorders/${order.orderId}`}>
                            {/* <Button variant="contained" color="success">
                              Edit
                            </Button> */}
                            <button>Edit</button>
                          </Link>
                            {/* <Button onClick={() => deleteOrder(orderId)} variant="outlined" startIcon={<DeleteIcon />}>
                              Delete
                            </Button> */}
                            <button onClick={() => deleteOrder(order.orderId)}>Delete</button>
                        </td>
            </tr>
      </tbody>
    );
  });
  return <>
  <div>
    <h2 className="header">ORDERS LIST</h2>
    {/* <Link to={`/addcategories`}>
                            <Button variant="contained" color="success">
                              Add new category
                            </Button>
    </Link> */}
    <div><br></br></div>
    <table className="table">
    <thead className="table-header">
                        <tr >
                        <th className="table-item-header">OrderID</th>
                        <th className="table-item-header">CustomerID</th>
                        <th className="table-item-header">Total</th>
                        <th className="table-item-header">OrderDate</th>
                        <th className="table-item-header">ShipDate</th>
                        <th className="table-item-header">TransactionStatusID</th>
                        <th className="table-item-header">Paid</th>
                        <th className="table-item-header">PaymentDate</th>
                        <th className="table-item-header">Note</th>
                        <th className="table-item-header">Actions</th>
                        </tr>
          </thead>
      {renderList}
    </table>
      
  </div>
      
  
  </>;
};

export default OdersList;
