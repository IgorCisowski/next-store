import ProductsUi from "./productsUi";

const getProductsData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export default async function ProductsList() {
  const data = await getProductsData();
  const products = data.products;
  return (
    <div className="my-7">
      <ProductsUi products={products} />
    </div>
  );
}
