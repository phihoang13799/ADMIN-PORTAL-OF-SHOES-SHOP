import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { productId } = useParams();
  const [products, setProducts] = useState({
    productName:"",
    description:"",
    sumproduct:"",
    thumb:"",
    discount:"",
    title:"",
    active:"",
    price:"",
    catId:"",
    dateCreated:"",
    dateModified:"",
    bestSeller:"",
    video:"",
  });

  const { productName,description,sumproduct,thumb,discount, title,active, price, catId,dateCreated,dateModified,bestSeller,video } = products;
  const onInputChange = e => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://localhost:44380/api/Products/${productId}`, products);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://localhost:44380/api/Products/${productId}`);
    setProducts(result.data);
  };

  return (
    <div className="container">
      <div className="main  w-75 mx-auto shadow p-5">
        
        <form className="Login-form" onSubmit={e => onSubmit(e)}>
        <h2 className="header-form">Edit Product: {productId}</h2>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="productName"
              name="productName"
              value={productName}
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
            <input
              type="text"
              className="Login-form-control"
              placeholder="sumproduct"
              name="sumproduct"
              value={sumproduct}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="discount"
              name="discount"
              value={discount}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="catId"
              name="catId"
              value={catId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="dateCreated"
              name="dateCreated"
              data-date-format="DD MMMM YYYY"
              value={dateCreated}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="date"
              className="Login-form-control"
              placeholder="dateModified"
              data-date-format="DD MMMM YYYY"
              name="dateModified"
              value={dateModified}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="checkbox"
              className="Login-form-control"
              placeholder="bestSeller"
              name="bestSeller"
              value={bestSeller}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="checkbox"
              className="Login-form-control"
              placeholder="active"
              name="active"
              value={active}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="file"
              className="Login-form-control"
              placeholder="thumb"
              name="thumb"
              // value={thumb}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="file"
              className="Login-form-control"
              placeholder="video"
              name="video"
              // value={video}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group"> 
          <button className="Login-form-submit">Update Product</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

