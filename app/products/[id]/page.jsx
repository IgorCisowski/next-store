import React from "react";

export default function Product() {
  return (
    <div className="my-16">
      <div className="w-full h-96 tex bg-black rounded-md mb-3">IMG</div>
      <h3 className="mb-3">Title</h3>
      <p className="mb-3">Description</p>
      <p className="mb-3">Price</p>
      <button className="py-3 w-full text-center bg-violet-800 text-white rounded-md duration-100 active:scale-95">
        Add to cart
      </button>
    </div>
  );
}
