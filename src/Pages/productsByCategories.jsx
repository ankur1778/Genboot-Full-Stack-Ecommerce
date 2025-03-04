import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategories } from "../Redux/Actions/ProductsByCategories/productByCategoriesAction";
import Navbar from "../Components/Navbar";
import MotionPath from "../Components/loader";
import AddToCartButton from "../utils/addToCart";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import AddToWishlistButton from "../utils/addToWishlist";
import CustomCarousel from "../Components/Carousel";

const ProductsByCategories = () => {
  const { categoryId } = useParams();
  const { productsByCategories, isError, isLoading } = useSelector(
    (state) => state.productsByCategory
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategories(categoryId));
  }, [dispatch, categoryId]);

  if (isError) {
    return <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }
  const slides = [
    {
      className: "bg-categoryPageFeaturedImage1",
      title: "Discover More,",
      subtitle: "Spend Less!",
    },
    {
      className: "bg-categoryPageFeaturedImage2",
      title: "Shop The Best,",
      subtitle: "Forget The Rest!",
    },
    {
      className: "bg-categoryPageFeaturedImage3",
      title: "From Wishlist to Doorstep",
      subtitle: "We Make Shopping Simple!",
    },
  ];

  return (
    <>
      <Navbar />
      <CustomCarousel slides={slides} />
      {isLoading ? (
        <div>
          <MotionPath />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center bg-gray-100">
            <div className="flex justify-center h-20 items-center mt-10">
              <h1 className="text-[60px] font-semibold uppercase italic ">
                {productsByCategories?.products?.length > 0
                  ? productsByCategories.products[0].category.name
                  : "Category"}
              </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
              {productsByCategories?.products?.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg px-10 py-10"
                >
                  <Link to={`/product/${product._id}`}>
                    <div className="flex justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 rounded-md h-48 delay-700 ease-in"
                      />
                    </div>
                    <div className="mt-4">
                      <h1 className="text-sm uppercase font-bold">
                        {product.name}
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        {product.description.slice(0, 40)}...
                      </p>
                      <p className="mt-2 text-gray-600">₹{product.price}</p>
                    </div>
                  </Link>
                  <div className="mt-6 flex justify-between items-center">
                  <AddToCartButton productId={product} />
                    <div>
                      <AddToWishlistButton product={product} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsByCategories;
