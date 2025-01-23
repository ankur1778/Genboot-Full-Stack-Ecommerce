import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Actions/AllProducts/allProductAction";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.allProducts
  );  
  console.log(products,"sssssssss");

  useEffect(() => {
   const hello= dispatch(getAllProducts());
   console.log("ssssslkfhjsdfj",hello);
  }, [dispatch]);
    
  return (
    <>
      <Navbar />
      <div >All Products</div>
    </>
  );
};

export default AllProducts;