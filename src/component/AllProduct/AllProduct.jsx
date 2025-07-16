import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import allProductImg from "../../assets/allproduct.avif";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
function AllProduct({ AddToCart }) {
  const [productCategory, setProductCategory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [originalProductData, setOriginalProductData] = useState([]);

  // Filter product
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const navigate = useNavigate();
  {
    /* Get All Product category */
  }
  useEffect(() => {
    const getAllProductCategory = async () => {
      try {
        const allCategories = await axios(
          "https://dummyjson.com/products/category-list"
        );
        setProductCategory(allCategories.data);
      } catch (error) {
        console.log(`API Error : ${error}`);
      }
    };

    getAllProductCategory();
  }, []);

  {
    /* Get All Products */
  }
  useEffect(() => {
    try {
      const getAllProducts = async () => {
        const result = await axios.get("https://dummyjson.com/products");
        // console.log(result.data.products);
        setAllProducts(result.data.products);
        setOriginalProductData(result.data.products);
      };
      getAllProducts();
    } catch (error) {
      console.log(`API Error : ${error}`);
    }
  }, []);

  {
    /* Get Product By Category */
  }
  const getProductByCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
    console.log("=====" + selectedCategory);
  };

  useEffect(() => {
    const data = selectedCategory
      ? originalProductData.filter(
          (filteredItem) => filteredItem.category === selectedCategory
        )
      : originalProductData;
    // console.log(data.length);
    setAllProducts(data);
  }, [selectedCategory]);

  //Search Product
  const searchProduct = (searchItem) => {
    const data = originalProductData.filter((filteredItem) =>
      filteredItem.category.toLowerCase().includes(searchItem.toLowerCase())
    );
    setAllProducts(data);
  };

  const filterProduct = (minPrice, maxPrice) => {
    const data = originalProductData.filter(
      (filteredItem) =>
        (!minPrice || filteredItem.price >= minPrice) &&
        (!maxPrice || filteredItem.price <= maxPrice)
    );
    setAllProducts(data);
  };
  return (
    <>
      {/* <Layout childeren={<h1>AllProduct</h1>} /> */}
      <div className="relative">
        <img
          src={allProductImg}
          alt=""
          className="object-cover w-full object-center h-[200px] mt-5"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 opacity-50"></div>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-bold text-white">
          All Products
        </h2>
      </div>

      {/* Product Category Section With Button options  */}
      {/* <div className="flex flex-wrap gap-3 mb-5">
        {productCategory.map((category, index) => (
          <div className="border" key={index}>
            <button
              className="boder bg-black text-white px-2 py-2 mt-2"
              onClick={() => getProductByCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div> */}

      {/* Product Category Section With Select options  */}
      <div className="bg-gray-50 py-10 px-4 md:px-10 rounded-xl shadow-md mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Filter Products
        </h2>

        {/* Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-6">
          <label className="text-xl font-medium text-gray-700">Category:</label>
          <select
            className="w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
            onChange={(e) => getProductByCategory(e.target.value)}
          >
            <option value="" key="_0">
              Select Category
            </option>
            {productCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search by Name */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-6">
          <label className="text-xl font-medium text-gray-700">Search:</label>
          <input
            type="text"
            placeholder="Product name..."
            className="w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
            value={filteredProduct}
            onChange={(e) => setFilteredProduct(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => searchProduct(filteredProduct)}
          >
            Search
          </button>
        </div>

        {/* Price Range Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <label className="text-xl font-medium text-gray-700">
            Price Range:
          </label>
          <input
            type="number"
            placeholder="Min"
            className="w-28 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="font-bold">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-28 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => filterProduct(minPrice, maxPrice)}
          >
            Filter
          </button>
        </div>
      </div>

      {/* Get All Products */}

      <div className="bg-white">
        <div className="mx-auto container sm:px-6 px-6 lg:px-0 md:px-0 sm:py-24 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Products List
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {allProducts.length > 0 ? (
              allProducts.map((product) => (
                <div className="group relative" key={product.id}>
                  <img
                    src={product.images[0]}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 pointer-events-none"
                        ></span>
                        {product.category}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.title}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                    <button
                      type="button"
                      className="mt-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
                      onClick={() => AddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl tracking-tight text-gray-900">
                No Product Found...
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
