import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import './EditCategory.css'

const EditCategory = () => {
  let history = useHistory();
  const { catId } = useParams();
  const [categories, setCategories] = useState({
    catName:"",
    levels:"",
    description:"",
    ordering:"",
    published:"",
  });

  const { description,levels,ordering, catname, published } = categories;
  const onInputChange = e => {
    setCategories({ ...categories, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    // e.preventDefault();
    await axios.put(`https://localhost:44380/api/Categories/${catId}`, categories);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://localhost:44380/api/Categories/${catId}`);
    setCategories(result.data);
  };
  return (
    <div className="container">
      <div className="main mx-auto shadow p-5">
        
        <form className="Login-form" onSubmit={e => onSubmit(e)}>
        <h2 className="header-form">Edit Category: {catId}</h2>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="catname"
              name="catname"
              value={catname}
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
              placeholder="levels"
              name="levels"
              value={levels}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <lable className="Login-form-group-lable">Published</lable>
            <input
              type="checkbox"
              className="Login-form-control-checkbox"
              placeholder="published"
              name="published"
              value={published}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <input
              type="text"
              className="Login-form-control"
              placeholder="ordering"
              name="ordering"
              value={ordering}
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
