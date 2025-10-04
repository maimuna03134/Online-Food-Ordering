import React from 'react';
import './FoodItem.css'

const FoodItem = ({item}) => {
    return (
      <div className="food-item card shadow ">
        <figure>
          <img
            className="cursor-pointer object-cover w-[300px] h-[300px] rounded-lg"
            src={item.image}
            alt={item.image}
          />
        </figure>
        <div className="card-body">
          <div className='flex justify-between items-center mb-3'>
            <h2 className="card-title text-amber-600 hover:text-amber-700 text-xl font-semibold cursor-pointer">
              {item.name}
            </h2>
            <span>{item.rating}</span>
          </div>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-base text-amber-600 font-semibold">
            ৳ <span>{item.price}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodItem;