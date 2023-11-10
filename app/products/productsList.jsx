import React from "react";
import Link from "next/link";
export default function ProductsList() {
  return (
    <div className="my-7">
      <Link href={`/products/id`}>
        <div className="mb-10">
          <div className="w-full h-96 bg-black rounded-md mb-3">IMG</div>
          <h3 className="mb-3">Title</h3>
          <p>Price</p>
        </div>
      </Link>
    </div>
  );
}
