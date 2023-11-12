import React from "react";
import Image from "next/image";
const getProductData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

export default async function Product({ params }) {
  const product = await getProductData(params.id);
  return (
    <div className="my-16">
      <div className="w-full h-96 rounded-md mb-3 overflow-hidden">
        <Image
          className="w-full h-full object-cover "
          src={product.thumbnail}
          width={100}
          height={100}
          alt="product-picture"
        />
      </div>
      <h3 className="mb-3">{product.title}</h3>
      <p className="mb-3">{product.description}</p>
      <p className="mb-3">${product.price}</p>
      <button className="py-3 w-full text-center bg-violet-800 text-white rounded-md duration-100 active:scale-95">
        Add to cart
      </button>
    </div>
  );
}
