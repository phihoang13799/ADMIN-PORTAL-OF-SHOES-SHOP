// import React from 'react';
import React, { useEffect,useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
// import { useState } from 'react';
import './AddCategory.css'
import fetchCategories from "../categoryList/CategoryList"

const AddCategory =() =>{
  let history = useHistory();
  const [categories, setCategories] = useState({
    catname:"",
    levels:"",
    description:"",
    ordering:"",
    published:"",
  });
  

  const { description,levels,ordering, catname, published } = categories;
  const onInputChange = e => {
    
    setCategories({ ...categories, [e.target.name]: e.target.value });
    
  };

    const onSubmit = async e => {
        // e.preventDefault();
        console.log(categories);
        await axios.post(`https://localhost:44380/api/Categories`,categories)
        // contentType: "application/json"
        .catch((err) => {
            console.log("Err: ", err);
          });

        history.push("/");
        // fetchCategories();
      };
    return(

        <div className="container">
            <div className="main">
              <form className="Login-form" onSubmit={e => onSubmit(e)}>
              <h3 className="form-title">Add Category</h3>
              <div className="Login-form-group">
                  <label>CategoryName</label>
                  <input className="Login-form-control" value={catname} type='text' name="catname" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>Description</label>
                  <input className="Login-form-control" value={description} type='text'  name="description" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>Published</label>
                  <input className="Login-form-control" value={published} type='text'  name="published" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>Levels</label>
                  <input className="Login-form-control" value={levels} type='text'  name="levels" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>Ordering</label>
                  <input className="Login-form-control" value={ordering} type='text'  name="ordering"onChange={e => onInputChange(e)} />
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

export default AddCategory;