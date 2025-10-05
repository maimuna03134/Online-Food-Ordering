import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import FoodItem from "./FoodItem";


const Menu = ({ category}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/itemData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="mt-24">
      <Container>
        <h2 className="text-4xl text-amber-700 font-semibold my-10">
          Explore the Best Dishes Near You 😍😍
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5  ">
          {items.map((item) => {
            if (category === 'All' || category === item.category) {
              return <FoodItem key={item._id} item={item}></FoodItem>
            } 
            
          })}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
