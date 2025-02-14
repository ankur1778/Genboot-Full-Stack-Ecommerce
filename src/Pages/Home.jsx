import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";
import { getAllCategories } from "../Redux/Actions/CategoriesAction/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import MotionPath from "../Components/loader";
import ToastMessage from "../utils/ToastMessage";
import { CategoriesMessages } from "../utils/statusMessages";
import { GetAllProducts } from "../AdminComponent/ActionsAdmin/Allproducts/productAction";
import CustomCarousel from "../Components/Carousel";
import ProductCarousel from "../Components/ProductCarousel";
import UseAnimationFrame from "../Animations/AnimationAbout";
import logo from "../Images/logo1.png";
import PaymentMethod from "../Images/paymentfeature.png";
import Image from "../Images/CategoryImage1.png";
import Image2 from "../Images/CategoryImage2.png";
import Image3 from "../Images/CategoryImage3.png";
import Image4 from "../Images/CategoryImage4.png";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getAllProducts);
  const { loading, error, categories } = useSelector(
    (state) => state.allCategories
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllProducts(4, 5, ""));
  }, [dispatch]);

  if (error) {
    return <ToastMessage message={CategoriesMessages.CANT_FETCH} />;
  }
  const slides = [
    {
      className: "bg-homeFeaturedImage1",
      title: "Discover More,",
      subtitle: "Spend Less!",
    },
    {
      className: "bg-homeFeaturedImage2",
      title: "Shop The Best,",
      subtitle: "Forget The Rest!",
    },
    {
      className: "bg-homeFeaturedImage3",
      title: "From Wishlist to Doorstep",
      subtitle: "We Make Shopping Simple!",
    },
    {
      className: "mr-20 bg-homeFeaturedImage4",
      title: "Shop. Save.",
      subtitle: "Smile More!",
    },
  ];

  return (
    <>
      <Navbar />
      <CustomCarousel slides={slides} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mx-4">
        {loading ? (
          <MotionPath />
        ) : categories ? (
          categories.map((category) => (
            <div key={category?._id}>
              <Link to={`category/${category._id}`}>
                <div>
                  <img
                    src={category?.image}
                    alt={category?.name}
                    className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="h-20 items-center flex justify-center">
            <MotionPath />
          </div>
        )}
      </div>
      <ProductCarousel products={products} />
      <div className="grid grid-cols-2 mt-10 px-8">
        <div className="bg-HomeBackgroundImage1 rounded-md opacity-75 bg-cover bg-center bg-no-repeat h-full flex justify-center items-center">
          <h1 className="font-bold text-5xl text-center mt-80 text-white">
            Summer Of '25
          </h1>
        </div>

        <div className="grid grid-cols-2 mr-6 h-[550px]">
          <div className="bg-HomeBackgroundImage2 opacity-75 bg-cover bg-center bg-no-repeat h-[275px] flex justify-center items-center">
            <h1 className="font-bold text-3xl mb-10 text-center text-white">
              धूप का चश्मा
            </h1>
          </div>
          <div className="bg-HomeBackgroundImage3 opacity-75 bg-cover bg-center bg-no-repeat h-[275px] flex justify-center items-center">
            <h1 className="font-bold text-3xl mb-10 text-center text-white">
              चप्पल
            </h1>
          </div>
          <div className="bg-HomeBackgroundImage4 opacity-75 bg-cover bg-center bg-no-repeat h-[275px] flex justify-center items-center">
            <h1 className="font-bold text-3xl mb-24 text-center text-white">
              टोपी
            </h1>
          </div>
          <div className="bg-HomeBackgroundImage5 opacity-75 bg-cover bg-center bg-no-repeat h-[275px] flex justify-center items-center">
            <h1 className="font-bold text-3xl mb-24 text-center text-white">
              घड़ी
            </h1>
          </div>
        </div>
      </div>
      <div className="flex border bg-gray-200 p-4 mt-5 rounded-lg mx-4 md:mx-20">
        <div className="flex justify-center items-center w-full sm:w-1/3">
          <img
            className="h-64 object-cover rounded-lg"
            src={Image4}
            alt="Everyday Collection"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full sm:w-2/3 p-4">
          <h1 className="text-3xl sm:text-4xl font-bold mt-5 text-gray-800">
            Everyday Collection 2021
          </h1>
          <p className="mt-3 text-gray-700">
            Be yourself. The ideal selection for your everyday use in a Super
            Saver range within a reasonable price range is here to keep you
            steady and trendy.
          </p>
          <div className=" justify-center mt-4">
            <Link to="/all-products">
              <button className=" items-center border-2 bg-gray-700 rounded-xl p-2 text-white hover:text-gray-900 px-6 py-3 text-2xl lg:text-2xl font-bold transition hover:bg-gray-300">
                <h1 className=" hover:scale-110 font-bold font-serif ">
                  Explore Now →{" "}
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="mt-5 bg-white  max-w-xs ml-20 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-lg h-80 p-5" src={Image} alt="" />
          <div class="p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white fw-bold text-1000 mt-5 text-truncate">
              What do your shoes....
            </h3>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Can you really judge a person by their shoes? Well, nobody should
              judge, but yes it’s true that shoes do say a lot about a person.
              Shoes matter in making a first impression to the strangers we have
              to meet everyday....
            </p>
            <Link to="/about" className="font-serif text-2xl">
              Read more →{" "}
            </Link>
          </div>
        </div>
        <div className="mt-5 bg-white  max-w-xs ml-10 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-lg h-80 p-5" src={Image2} alt="" />
          <div class="p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white fw-bold text-1000 mt-5 text-truncate">
              Fashion Weekend....
            </h3>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A bangning catwalk show, an inspiring shoe exhibition, a nostalgic
              pop-up museum, and the finale of the Bata Young Designers’
              Challange- our Fashion weekend 2021 at the historuc Zofin Palace
              in Pargue...
            </p>
            <Link to="/about" className="font-serif text-2xl">
              Read more →{" "}
            </Link>
          </div>
        </div>
        <div className="mt-5 bg-white  max-w-xs ml-10 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-lg h-80 p-5" src={Image3} alt="" />
          <div class="p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white fw-bold text-1000 mt-5 text-truncate">
              Spring dress try-on....
            </h3>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Every spring I start going through dress withdrawals and get so
              excited for the bright colors and patterns of a new season! I
              ordered some of the prettiest spring dresses and wanted to share
              some of...
            </p>
            <Link to="/about" className="font-serif text-2xl">
              Read more →{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 my-8  bg-slate-400 rounded-lg">
        <div className="px-24">
          <img className="h-[150px] " src={logo} alt="Load" />
          <h3 className=" items-center text-justify text-lg font-serif ">
            The customer is at the heart of our unique business model, which
            includes design.
          </h3>
          <img className="my-8" src={PaymentMethod} alt="load" />
        </div>
        <div className="my-8 px-28">
          <h1 className="text-2xl font-semibold font-serif">Shopping</h1>
          {loading ? (
            <MotionPath />
          ) : categories ? (
            categories.map((category) => (
              <div key={category?._id}>
                <Link to={`/category/${category._id}`}>
                  <div>
                    <p className="text-lg font-serif py-2 hover:text-red-700 hover:scale-105">
                      {category?.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="h-20 items-center flex justify-center">
              <MotionPath />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-24">
          <UseAnimationFrame />
        </div>
      </div>
    </>
  );
};

export default Home;
