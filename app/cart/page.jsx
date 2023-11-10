export default function Cart() {
  // import { FiShoppingBag } from "react-icons/fi";
  return (
    <section>
      {/* HEADING */}
      <h2 className="font-semibold text-3xl my-10">Shopping Cart</h2>
      {/* PRODUCT */}
      <div className="flex justify-between gap-2 border-t-2 border-b-2 border-black py-4">
        <div className="w-1/2 h-32 bg-black rounded-md">IMG</div>
        <div className="flex flex-col justify-start gap-y-3 flex-grow pl-3">
          <h3>Title</h3>
          <p>Price</p>
          <div className="flex items-center gap-3">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="mb-10 flex justify-between gap-2 border-t-2 border-b-2 border-black py-4">
        <div className="w-1/2 h-32 bg-black rounded-md">IMG</div>
        <div className="flex flex-col justify-start gap-y-3 flex-grow pl-3">
          <h3>Title</h3>
          <p>Price</p>
          <div className="flex items-center gap-3">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
      </div>
      {/* SUBTOTAL */}
      <div className="w-full bg-black text-white rounded-md py-5 px-3 mb-10">
        <h3 className="text-xl mb-3">Order summary</h3>
        <div className="flex justify-between mb-3">
          <p>Order total</p>
          <p>$99.99</p>
        </div>
        <button className="py-3 w-full text-center bg-violet-800 text-white rounded-md duration-100 active:scale-95">
          Checkout
        </button>
      </div>
    </section>
  );
}

// const isEmpty = cart.length

// {isEmpty ? (<div className="flex flex-col gap-y-4 items-center justify-center"><FiShoppingBag/><h3>Your bag is empty</h3>
// <Link href="/products"></Link><p>Shop now -></p></div>) : ()}
