import React from "react";
import Link from "next/link";
import Image from "next/image";
const getProductsData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export default async function ProductsList() {
  const data = await getProductsData();
  return (
    <div className="my-7">
      {data.products.map(({ id, title, price, category, thumbnail }) => {
        return (
          <Link href={`/products/${id}`} key={id}>
            <div className="mb-10">
              <div className="w-full h-96 rounded-md mb-3 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={thumbnail}
                  width={100}
                  height={100}
                  alt="product-picture"
                />
              </div>
              <h3 className="mb-3">{title}</h3>
              <p>${price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
