import React from "react";
import Navbar from "../Components/Navbar";
import TeamMember from "../Images/team-2.jpg";
import TeamMember1 from "../Images/team-3.jpg";
import TeamMember2 from "../Images/team-4.jpg";
import HangoutImage from "../Images/hangouts-messenger-svgrepo-com.svg";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-8 h-[450px] my-4 rounded-3xl  bg-cover bg-center bg-AboutFeaturedImage ">
        <div className="flex justify-start">
          <h1 className="font-semibold  py-20  text-3xl text-[#E78F81] mt-20 sm:text-4xl md:text-[48px] font-serif sm:mx-8 sm:p-12  ">
            Luxury Products,
            <br />
            <br />
            <br />
            Affordable Pricing !
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 my-5 font-['Nunito Sans'] font-sans h-40 py-12 ">
        <div className="px-12 justify-center">
          <h1 className="text-2xl font-serif text-center font-semibold">
            Who We Are ?
          </h1>
          <p className="text-sm my-2 font-serif font-normal text-center">
            Contextual advertising programs sometimes have
            <br />
            strict policies that need to be adhered too. Let’s take
            <br />
            Google as an example
          </p>
        </div>
        <h4 className="text-2xl font-serif text-center font-semibold">
          What We Do ?
          <br />
          <p className="text-sm my-2 font-serif font-normal ">
            In this digital generation where information can be
            <br />
            easily obtained within seconds, business cards still
            <br />
            have retained their importance.
          </p>
        </h4>
        <h4 className="text-2xl font-serif text-center font-semibold">
          Why Choose Us ?
          <br />
          <p className="text-sm my-2 font-serif  font-normal">
            A two or three storey house is the ideal way to
            <br />
            maximise the piece of earth on which our home sits,
            <br />
            but for older or infirm people.
          </p>
        </h4>
      </div>
      <div className="grid grid-cols-2 bg-slate-300 ">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <img className="mx-auto" src={HangoutImage} alt="oa" />
            <p className="text-justify text-2xl  font-serif">
              "Going out after work? Take your <br />
              butane curling iron with you to the <br />
              office, heat it up, style your hair <br />
              before you leave the office and you <br />
              won’t have to make a trip back home."
            </p>
          </div>
        </div>
        <div className="bg-AboutFeaturedImage2 bg-no-repeat h-[400px] me-4 rounded-xl"></div>
      </div>
      <div className="flex justify-center">
        <h2 className="text-3xl p-5 font-bold text-red-700">Meet Our Team </h2>
      </div>
      <div className="grid grid-cols-3">
        <img className="h-[300px] p-1 px-14" src={TeamMember} alt="load" />
        <img
          className="h-[300px] p-1 px-10 w-[350px]"
          src={TeamMember1}
          alt="Load"
        />
        <img
          className="h-[300px] p-1 px-10 w-[350px]"
          src={TeamMember2}
          alt="Load"
        />
      </div>
      <div className="grid grid-cols-3">
        <h3 className="px-36 text-lg font-serif">
          Mohit Raj Singh
          <br />
          (Owner)
        </h3>
        <h3 className="px-28 text-lg font-serif">
          John Smith
          <br />
          (UI/UX Designer)
        </h3>
        <h3 className="px-28 text-lg font-serif">
          Sean Robins
          <br />
          (Developer)
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;
