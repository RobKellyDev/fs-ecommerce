import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const URL = "https://fakestoreapi.com";

const Products = () => {
  //debugger;

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let [loading, setLoading] = useState(false);

  const handleProductsAPI = async () => {
    let response = await fetch(`${URL}/products`);
    if (response) return response;
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (
        JSON.parse(localStorage.getItem("products")) === null ||
        typeof JSON.parse(localStorage.getItem("products")) === "object"
      ) {
        localStorage.clear();
        let response = await handleProductsAPI();
        if (response) {
          //console.log("is response ", response);
          setData(await response.clone().json());
          setFilter(await response.json());
          localStorage.setItem("products", JSON.stringify(data));
          return setLoading(false);
        }
      } else {
        let response = JSON.parse(localStorage.getItem("products"));
        setData(await response);
        setFilter(await response);
        return setLoading(false);
      }

      return () => {
        return data;
      };
    };

    getProducts();
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
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark me-2"
          >
            Jewellery
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark me-2"
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div key={product.id} className="col-md-3 mb-4">
              <div
                className="card h-100 text-center p-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="300"
                  width="175"
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
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
