import React, { useEffect,useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {getCategories} from "../../redux/actions/productActions";
import './CategoryList.css'

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";



const CategoriesList = () => {
  const categories = useSelector((state) => state.allCategories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    console.log("fethData")
    const response = await axios
      .get("https://localhost:44380/api/Categories")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getCategories(response.data));
  };
  console.log("Categories :", categories);
  const deleteCategory = async catId => {
    const response = await axios.delete(`https://localhost:44380/api/Categories/${catId}`);
    fetchCategories();
    
  };

  const renderList = categories.map((category) => {
    // const { description,levels,ordering, catId, catname, published } = category;
    return (
        <tbody className="four wide column" key={category.catId}>
            <tr>
                          <td className="table-item">{category.catId}</td>
                          <td className="table-item">{category.catname}</td>
                          <td className="table-item">{category.description}</td>
                          <td className="table-item">{category.published}</td>
                          <td className="table-item">{category.levels}</td>
                          <td className="table-item">{category.ordering}</td>
                          <td className="table-item">
                            <Link style={{textDecoration: 'none'}} to={`/categories/${category.catId}`}>
                              <Button variant="contained" endIcon={<SendIcon />}>
                                  View
                              </Button>
                            </Link>
                            <Link style={{textDecoration: 'none'}} to={`/editcategories/${category.catId}`}>
                              <Button variant="contained" color="success">
                                Edit
                              </Button>
                            </Link >
                              <Button 
                                      //  onclick={props.delete()}
                                      onClick={() => deleteCategory(category.catId)} 
                                      variant="outlined" 
                                      startIcon={<DeleteIcon />}>
                                Delete
                              </Button>
                          </td>
              </tr>
        </tbody>
      );
    });
    return <>
    <div>
      <h2 className="header">CATEGORY LIST</h2>
      <Link style={{textDecoration: 'none'}} to={`/addcategories`}>
                              <Button variant="contained" color="success">
                                Add new category
                              </Button>
      </Link>
      <div><br></br></div>
      <table className="table">
      <thead className="table-header">
                          <tr >
                          <th className="table-item-header">CatID</th>
                          <th className="table-item-header">Category Name</th>
                          <th className="table-item-header">Description</th>
                          <th className="table-item-header">Published</th>
                          <th className="table-item-header">Levels</th>
                          <th className="table-item-header">Ordering</th>
                          <th className="table-item-header">Actions</th>
                          </tr>
            </thead>
        {renderList}
      </table>
        
    </div>
    </>;
};

export default CategoriesList;
