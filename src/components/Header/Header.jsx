import React from "react";
import './Header.css'
import headerImg from "../../assets/header_img.png";
const Header = () => {
  return (
    <div >
      <div
        className="header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "34vw",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <div className="header-contains flex-col items-start  bottom-[10%] left-[6vw] absolute max-w-[50%]">
          <h2 className="font-semibold text-5xl leading-16 text-white ">
            Order your <br />
            favourite food here
          </h2>
          <p className="my-5 text-white text-sm leading-7">
            Why wait when your cravings can be satisfied instantly?
            <br />
            Order now and enjoy hot, fresh food without leaving your couch
          </p>
          <div>
            <button className="btn bg-amber-200 hover:bg-amber-700 hover:text-amber-100 text-amber-700 fon rounded-full">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
