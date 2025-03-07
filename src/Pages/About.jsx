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
      <div className="mx-4 sm:mx-8 h-[300px] sm:h-[450px] my-4 rounded-3xl bg-cover bg-center bg-AboutFeaturedImage flex items-center">
        <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl text-[#E78F81] p-4 sm:py-20 sm:mx-8 font-serif">
          Luxury Products, <br /> Affordable Pricing!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-5 text-center font-sans py-12 px-4 sm:px-12">
        <div>
          <h1 className="text-xl sm:text-2xl font-serif font-semibold">Who We Are?</h1>
          <p className="text-sm my-2 font-serif font-normal">
            Contextual advertising programs sometimes have strict policies that
            need to be adhered to.
          </p>
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-serif font-semibold">What We Do?</h4>
          <p className="text-sm my-2 font-serif font-normal">
            In this digital generation, business cards still retain their
            importance.
          </p>
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-serif font-semibold">Why Choose Us?</h4>
          <p className="text-sm my-2 font-serif font-normal">
            A multi-storey house maximizes space, but we offer accessibility for
            everyone.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-300 p-6 gap-6">
        <div className="flex justify-center items-center text-center">
          <div>
            <img className="mx-auto w-20 sm:w-28" src={HangoutImage} alt="Chat" />
            <p className="text-lg sm:text-2xl font-serif p-4">
              "Going out after work? Take your butane curling iron with you to
              the office, style your hair, and you won’t have to make a trip
              back home."
            </p>
          </div>
        </div>
        <div className="bg-AboutFeaturedImage2 bg-no-repeat h-[250px] sm:h-[400px] rounded-xl"></div>
      </div>
      <div className="text-center py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-700">Meet Our Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-14">
        <img className="h-[250px] sm:h-[300px] mx-auto" src={TeamMember} alt="Team Member" />
        <img className="h-[250px] sm:h-[300px] mx-auto" src={TeamMember1} alt="Team Member" />
        <img className="h-[250px] sm:h-[300px] mx-auto" src={TeamMember2} alt="Team Member" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center py-6">
        <h3 className="text-lg font-serif">Mohit Raj Singh (Owner)</h3>
        <h3 className="text-lg font-serif">John Smith (UI/UX Designer)</h3>
        <h3 className="text-lg font-serif">Sean Robins (Developer)</h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;