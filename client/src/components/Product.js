import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addItemCart } from '../redux/action'
import { Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = product => dispatch(addItemCart(product));
  

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      console.log("what is response ", response);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
      <div className="col-md-6">
        <Skeleton height="400" />
      </div>
      <div className="col-md-6" style={{lineHeight: 2}}>
        <Skeleton height={300} width={50} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={100} width={50} />
      </div>
      </>
    )
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            height={400}
            width={400}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate} &nbsp;
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">£ {product.price}</h3>
          <p className="lead">{product.description}</p>
          
          <button 
            onClick={() => addProduct(product)}
            className="btn btn-outline-dark px-4 py-2">
              Add to Cart
          </button>
          <button className="btn btn-dark ms-2 px-3 py-2">
              <Link 
                style={{color: "white", textDecoration: "none"}} 
                to="/cart">Go to Cart
              </Link>
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
