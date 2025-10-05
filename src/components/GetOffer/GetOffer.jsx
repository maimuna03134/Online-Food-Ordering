import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Container from "../Container/Container";

const GetOffer = () => {
  return (
    <section className="bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 py-16 px-6 mt-20">
      <Container>
        <div className=" flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Get Exclusive Offers & Updates 🍔
            </h2>
            <p className="text-gray-600 text-lg">
              Join our mailing list to receive special discounts, new menu
              alerts, and tasty surprises delivered straight to your inbox!
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1">
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-auto flex-grow">
                <FaEnvelopeOpenText className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow"
              >
                Get Offer
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-3">
              *We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <h1 className="text-3xl text-red-600 mt-10">
          Aro kaj ase.. pore korbo 😑🤭
        </h1>
      </Container>
    </section>
  );
};

export default GetOffer;
