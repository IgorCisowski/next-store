import Image from "next/image";
import Link from "next/link";
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export default async function ProductsList() {
  const data = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      {data.products.map(
        ({ id, title, price, rating, category, thumbnail }) => {
          return (
            <div key={id}>
              <Link href={`/products/${id}`}>
                <Image
                  src={thumbnail}
                  alt="product"
                  width={50}
                  height={50}
                ></Image>
                <h3>{title}</h3>
                <p>{price}</p>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
}
