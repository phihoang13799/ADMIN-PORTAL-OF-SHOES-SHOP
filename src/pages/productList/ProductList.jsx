import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {setProducts} from "../../redux/actions/productActions";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './productList.css'
import { Link } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://localhost:44380/api/Products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
  console.log("Products :", products);
  const deleteUser = async productId => {
    const response = await axios.delete(`https://localhost:44380/api/Products/${productId}`);
    // dispatch(deleteProducts(response.data))
    fetchProducts();
  };

  const renderList = products.map((product) => {
    // const { productId,productName,description,sumproduct,thumb,discount, title,active,dateCreated, image, price, catId } = product;
    return (
      <tbody className="four wide column" key={product.productId}>
          <tr>
                        <td className="table-item">{product.productId}</td>
                        <td className="table-item">{product.productName}</td>
                        <td className="table-item">{product.catId}</td>
                        <td className="table-item">{product.description}</td>
                        <td className="table-item">{product.sumproduct}</td>
                        <td className="table-item">{product.price}</td>
                        <td className="table-item">{product.dateCreated}</td>
                        <td className="table-item">{product.discount}</td>
                        <td className="table-item">{product.active}</td>
                        <td className="table-item">
                          <Link style={{textDecoration: 'none'}} to={`/products/${product.productId}`}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                View
                            </Button>
                          </Link>
                          <Link style={{textDecoration: 'none'}} to={`/editproduct/${product.productId}`}>
                            <Button variant="contained" color="success">
                              Edit
                            </Button>
                          </Link>
                          
                            <Button onClick={() => deleteUser(product.productId)} variant="outlined" startIcon={<DeleteIcon />}>
                              Delete
                            </Button>
                          
                        </td>
            </tr>
      </tbody>
    );
  });
  return <>
  <div>
    <h2 className="header">PRODUCT LIST</h2>
    <Link style={{textDecoration: 'none'}} to={`/addproduct`}>
                            <Button variant="contained" color="success">
                              Add new product
                            </Button>
    </Link>
    <div className="div"><br></br></div>
    <table className="table">
    <thead className="table-header">
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
                        <th className="table-item-header">Actions</th>
                        </tr>
          </thead>
      {renderList}
    </table>
      
  </div>
      
  
  </>;
};

export default ProductPage;
