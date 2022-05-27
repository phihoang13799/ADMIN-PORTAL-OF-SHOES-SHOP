import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCategory,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
// import './ProductDetails.css'

const CategoryDetails = () => {
  const { catId } = useParams();
  let category = useSelector((state) => state.category);
  const { description,levels,ordering, catname, published } = category;
  const dispatch = useDispatch();
  const fetchCategoryDetail = async (catId) => {
    const response = await axios
      .get(`https://localhost:44380/api/Categories/${catId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedCategory(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    if (catId && catId !== "") fetchCategoryDetail(catId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [catId]);
  return (
    <div className="ui grid container">
        {console.log("details",catId)}
      {Object.keys(catId).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="main pop-up-item>">
            <h2>CATID: {catId}</h2>
            <ul className="list-group w-100">
                                <li className="list-group-item">CatId: {catId}</li>
                                <li className="list-group-item">CatName: {catname}</li>
                                <li className="list-group-item">Description: {description}</li>
                                <li className="list-group-item">Published: {published}</li>
                                <li className="list-group-item">levels: {levels}</li>
                                <li className="list-group-item">Ordering: {ordering}</li>
        </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;