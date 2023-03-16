import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts } from "../../../redux/actions/ProductsAction";

const ProductsList = () => {

 const dispatch = useDispatch()

 useEffect(() => {
   dispatch(AllProducts())
  }, [dispatch]);

  const data = useSelector(state => state.ProductsReducer.products)

  console.log(data)

  return <div>ProductsList</div>;
};

export default ProductsList;
