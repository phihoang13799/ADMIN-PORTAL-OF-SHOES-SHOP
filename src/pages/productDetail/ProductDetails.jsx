import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import './ProductDetails.css'

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { productName, image, title, price, catId, description,active,quantity,thumb, bestSeller, video, discount, dateCreated, dateModified } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (productId) => {
    const response = await axios
      .get(`https://localhost:44380/api/Products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
        {console.log("details",productId)}
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="main">
              <div>PRODUCTID: {productId}</div>
              <div></div>
              <br></br>
              <table>
                <thead>
                <tr >
                        <th className="table-item-header">ID</th>
                        <th className="table-item-header">Product Name</th>
                        <th className="table-item-header">CartId</th>
                        <th className="table-item-header">Description</th>
                        <th className="table-item-header">Quantity</th>
                        <th className="table-item-header">Price</th>
                        <th className="table-item-header">DateCreated</th>
                        <th className="table-item-header">Discount</th>
                        <th className="table-item-header">Active</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="table-item">{productId}</td>
                        <td className="table-item">{productName}</td>
                        <th className="table-item">{catId}</th>
                        <th className="table-item">{description}</th>
                        <th className="table-item">{quantity}</th>
                        <th className="table-item">{price}</th>
                        <th className="table-item">{dateCreated}</th>
                        <th className="table-item">{discount}</th>
                        <th className="table-item">{active}</th>
                  </tr>
                </tbody>
              </table>
              
        </div>
      )}
    </div>
  );
};

export default ProductDetails;