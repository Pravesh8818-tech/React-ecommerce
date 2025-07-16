import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function PopularProduct({ AddToCart }) {
  const [popularProduct, setpopularProduct] = useState([]);
  useEffect(() => {
    const popularProduct = async () => {
      try {
        const popularProduct = await axios("https://dummyjson.com/carts/1");
        setpopularProduct(popularProduct.data.products);
        console.log(popularProduct.data.products);
      } catch (error) {
        toast.error(`API Error : ${error}`);
      }
    };
    popularProduct();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-red-400 justify-content-center text-center">
        Popular Product
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {popularProduct.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.thumbnail}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
                <button
                  type="button"
                  className="mt-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
                  onClick={() => AddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularProduct;
