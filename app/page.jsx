import React from "react";
import Hero from "./components/Hero";
import Products from "./products/page";

export default function Dashboard() {
  return (
    <section className="my-10">
      <Hero />
      <Products />
    </section>
  );
}
