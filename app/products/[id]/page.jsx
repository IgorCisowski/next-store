import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

export default async function productsList({ params }) {
  const data = await getProduct(params.id);

  return (
    <div>
      <h1>Product</h1>
      <div>
        <Image
          src={data.thumbnail}
          alt="product"
          width={50}
          height={50}
        ></Image>
        <h3>{data.title}</h3>
        <p>{data.price}</p>
      </div>
    </div>
  );
}
