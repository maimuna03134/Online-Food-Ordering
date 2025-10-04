import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import Container from "../Container/Container";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Container>
      <div className="explore-menu flex flex-col  gap-5 my-10">
        <h1 className="text-2xl text-amber-600 font-semibold">
          Explore Our Menu
        </h1>
        <p className="text-[#353333] text-sm ">
          Good food, good mood – always delivered with care. From snacks to full
          meals, we serve up joy in every bite. <br />
          Explore our menu and treat yourself to something truly delicious.
        </p>
        <div className="explore-menu-list flex justify-between items-center gap-7 text-center ">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="explore-menu-list-item cursor-pointer"
              >
                <img
                  className={`w-[7.5vw] min-w-[80px]  rounded-[50%] ${
                    category === item.menu_name
                      ? "p-1 border-4 border-amber-800"
                      : ""
                  }`}
                  src={item.menu_image}
                  alt="Menu Image"
                />
                <p
                  className={`mt-2 text-[16px] font-semibold text-[#747474] hover:text-amber-700 ${
                    category === item.menu_name
                      ? " border-b-2 border-b-amber-800"
                      : ""
                  }`}
                >
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default ExploreMenu;
