import React from 'react';
import './AddProduct.css'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import './AddProduct.css'

const AddProduct =({}) =>{
    let history = useHistory();
  const [product, setProduct] = useState({
    productName:"",
    description:"",
    sumProduct:"",
    thumb:"",
    discount:"",
    title:null,
    active:null,
    price:"",
    catId:"",
    dateCreated:"",
    dateModified:null,
    bestSeller:null,
    video:null,
    homeFlag:null,
    metaDesc:null,
    metaKey:null,
    alias:null,
    tags:null,
  });

  const { productName,metaDesc,metaKey,alias,tags,description,sumProduct,homeFlag,thumb,discount, title,active, price, catId,dateCreated,dateModified,bestSeller,video } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

    const onSubmit = async e => {
        // e.preventDefault();
        console.log(product)
        await axios.post(`https://localhost:44380/api/Products`,product);
        history.push("/");
      };
    return(
        <div className="container">
            <div className="main">
            <form className="Login-form" onSubmit={e => onSubmit(e)}>
            <h3 className="header-form">Add PRODUCT</h3>
            <div className="Login-form-group">
                <label>ProductName: </label>
                <input className="Login-form-control" value={productName} type='text' name="productName" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>Price: </label>
                <input className="Login-form-control" value={price} type='text'  name="price" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>catId: </label>
                <input className="Login-form-control" value={catId} type='text'  name="catId" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>Description: </label>
                <input className="Login-form-control" value={description} type='text'  name="description"onChange={e => onInputChange(e)} />
            </div>
            <div className="Login-form-group">
                <label>SUMProduct: </label>
                <input className="Login-form-control" value={sumProduct} type='text'  name="sumProduct" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>Discount: </label>
                <input className="Login-form-control" value={discount} type='text'  name="discount" onChange={e => onInputChange(e)}/>
            </div>
                <div className="Login-form-group">
                <label>DateCreated: </label>
                <input className="Login-form-control" value={dateCreated} type='date'  name="dateCreated" onChange={e => onInputChange(e)}/>
            </div>
            {/* <div className="Login-form-group">
                <label>DateModified: </label>
                <input className="Login-form-control" value={dateModified} type='date'  name="dateModified" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>BestSeller: </label>
                <input className="Login-form-control" value={bestSeller} type='text' name="bestSeller" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>homeFlag: </label>
                <input className="Login-form-control" value={homeFlag} type='text' name="homeFlag" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>Active: </label>
                <input className="Login-form-control" value={active} type='text'  name="active" onChange={e => onInputChange(e)}/>
            </div> */}
            {/* <div className="Login-form-group">
                <label>Title: </label>
                <input className="Login-form-control" value={title} 
                type='text'  name="title" onChange={e => onInputChange(e)}/>
            </div> */}
            {/* <div className="Login-form-group">
                <label>metaDesc: </label>
                <input value={metaDesc} 
                type='text'  className="Login-form-control" name="metaDesc" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>metaKey: </label>
                <input value={metaKey} 
                type='text'  className="Login-form-control" name="metaKey" onChange={e => onInputChange(e)}/>
            </div>
            <div className="Login-form-group">
                <label>alias: </label>
                <input value={alias} 
                type='text' className="Login-form-control"  name="alias" onChange={e => onInputChange(e)}/>
            </div> */}
            {/* <div className="Login-form-group">
                <label>tags: </label>
                <input value={tags} 
                type='text' className="Login-form-control"  name="tags" onChange={e => onInputChange(e)}/>
            </div> */}
            <div className="Login-form-group">
                <label>Thumb: </label>
                <input 
                value={thumb}
                type='text' className="Login-form-control"  name="thumb" onChange={e => onInputChange(e)} />
            </div>
            {/* <div className="Login-form-group">
                <label>Video: </label>
                <input 
                value={video} 
                type='text' className="Login-form-control"  name="video" onChange={e => onInputChange(e)}/>
            </div> */}
            <div className="Login-form-group">
                <button className="Login-form-submit" type="submit">Add</button>
            </div>
            
            
            <hr />
      </form>
            </div>
        </div>
    )
}

export default AddProduct;