import React, { useState } from "react";
import "../styles/Products.css"; // Ensure this path is correct
import productImage1 from "../assets/product1.jpg"; // Ensure this path is correct
import productImage2 from "../assets/product2.jpeg"; // Ensure this path is correct
import productImage3 from "../assets/product3.jpg"; // Ensure this path is correct

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("injection");

  const categories = [
    { id: "injection", name: "Injection Moulding" },
    { id: "retrofit", name: "Retrofit Range" },
    { id: "industry4", name: "Industry 4.0" },
  ];

  const products = {
    injection: [
      {
        id: 1,
        name: "Futura Series",
        image: productImage1,
        link: "/product/Futura-series",
      },
      {
        id: 2,
        name: "Ventura Series",
        image: productImage2,
        link: "/product/Ventura-series",
      },
      {
        id: 3,
        name: "HyLock Series",
        image: productImage3,
        link: "/product/hylock-series",
      },
    ],
    retrofit: [
      {
        id: 4,
        name: "Servo Retrofit",
        image: productImage1,
        link: "/product/servo-retrofit",
      },
      {
        id: 5,
        name: "Elektra Power Saver",
        image: productImage2,
        link: "/product/elektra-power-saver",
      },
    ],
    industry4: [
      { id: 6, name: "E2M", image: productImage3, link: "/product/e2m" },
    ],
  };

  return (
    <div>
      <div className="product-head-img">
        <img src={productImage2} alt="" />
      </div>
      <div className="products-container">
        <header className="products-header">
          <h1>
            <b>PRODUCT</b> CATEGORIES
          </h1>
          <nav className="categories-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </header>
        <div className="products-grid">
          {products[selectedCategory].map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => (window.location.href = product.link)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
