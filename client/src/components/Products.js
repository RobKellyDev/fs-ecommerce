import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "lazysizes";
import { NavLink, Link } from "react-router-dom";

const URL = "https://fakestoreapi.com";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let [loading, setLoading] = useState(true);

  let componentMounted = true;

  const handleProductsAPI = async () => {
    let response = await fetch(`${URL}/products`);
    return response;
  };

  const isLocalStorageEmpty = () => {
    return JSON.parse(localStorage.getItem("products")) === null ||
      typeof JSON.parse(localStorage.getItem("products")) === "string" ||
      JSON.parse(localStorage.getItem("products")).length === 0
      ? true
      : false;
  };

  useEffect(() => {
    const getProducts = async () => {
      if (isLocalStorageEmpty() === true) {
        let response = await handleProductsAPI();

        if (componentMounted && response) {
          setData(await response.clone().json());
          let items = await response.clone().json();
          setFilter(await response.json());
          localStorage.setItem("products", JSON.stringify(items));
          return setLoading(false);
        }
      } else if (isLocalStorageEmpty() === false) {
        let items = await JSON.parse(localStorage.getItem("products"));
        setData(items);
        setFilter(items);
        return setLoading(false);
      }
    };

    let responseProducts = getProducts();

    return () => {
      componentMounted = false;
      return {
        responseProducts,
        componentMounted,
      };
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) =>
    setFilter(data.filter((itm) => itm.category === cat));

  const ShowProducts = () => {
    return (
      <>
        <div className="col-12 d-flex flex-column flex-sm-row justify-content-between btn-group buttons mb-5">
          <button
            className="btn btn-outline-dark mb-3 mb-sm-0"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark mb-3 mb-sm-0"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark mb-3 mb-sm-0"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark mb-3 mb-sm-0"
          >
            Jewellery
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark mb-3 mb-sm-0"
          >
            Electronics
          </button>
        </div>

        {data &&
          filter.map((product) => {
            return (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-lg-4 mb-4"
              >
                <div className="card w-100 text-center p-4">
                  <img
                    style={{
                      aspectRatio: "auto",
                      objectFit: "scale-down",
                      width: "100%",
                      height: "340px",
                      padding: "1.25rem 0.5rem",
                    }}
                    data-src={product.image}
                    data-sizes={"auto"}
                    data-srcset={product.image}
                    className={"card-img-top lazyload"}
                    alt={product.title}
                    height="340"
                    width="600"
                  />

                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">£{product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mb-5">
          <header className="col-12 mt-3">
            <nav role="navigation" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li 
                  className="breadcrumb-item text-uppercase">
                  <NavLink
                    className="" 
                    to="/">
                    Home
                  </NavLink>
                </li>
                <li 
                  className="breadcrumb-item text-uppercase">
                  <NavLink 
                    aria-current="page"
                    className="" to="/products">
                    Products
                  </NavLink>
                </li>
              </ol>
            </nav>

            <h1 className="display-12 fw-bolder text-center">
              Latest Products
            </h1>
            <hr />
          </header>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
