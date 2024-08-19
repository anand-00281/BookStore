import React from "react";

const Cards = ({ item }) => {
  // console.log(item)
  return (
    <>
      <div className="mt-6 my-3">
        <div className="card bg-base-100 w-80 shadow-xl md:hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border" >
          <figure className="">
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.className}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions mt-1 flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
