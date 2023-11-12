"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Pagination from "./pagination";

export default function ProductsUi({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPosts.map(({ id, title, price, category, thumbnail }) => {
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
      <Pagination
        totalPosts={products.length}
        postPerPage={postPerPage}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}
