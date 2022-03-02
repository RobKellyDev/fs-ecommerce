import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';

const URL = "https://fakestoreapi.com";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let compMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
  
      if (compMounted && data.length > 0) {
        let response = await fetch(`${URL}/products`);
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log('what is data ',data);
        localStorage.setItem('products', JSON.stringify(data));
      }
      else {
        let response = await localStorage.getItem('products');
        setData(await JSON.parse(response));
        setFilter(await JSON.parse(response));
        setLoading(false);
        console.log('what is local storage data ',data);


      }
      return () => {
        compMounted = false;
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
                  <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
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
