import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart, delItemCart, totalCartItems } from '../../redux/action';
import { Link, useParams } from 'react-router-dom';
// styles
import '../../styles/components/Product.scss';
import { FadeInDiv } from '../../components/animations/FadeInDiv';
import { SlideInUpDiv } from '../../components/animations/SlideInUpDiv';
// skeleton
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartBtn, setCartBtn] = useState('Add to Cart');

  const state = useSelector(state => state.cartReducer);
  let cartItems = state.cartItems;

  const dispatch = useDispatch();

  const addProduct = product => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItemCart(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItemCart(product));
      setCartBtn('Add to Cart');
    }
  };

  useEffect(() => {
    dispatch(totalCartItems(cartItems));
    return () => {
      return [dispatch, cartItems];
    };
  }, [dispatch, cartItems]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    let responseProduct = getProduct();

    return () => responseProduct;
  }, [id]);

  // Loading comp
  const Loading = () => (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={300} width={50} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={100} width={50} />
      </div>
    </>
  );

  // ShowProduct comp
  const ShowProduct = () => (
    <>
      <div className="col-12 col-xl-6 d-flex justify-content-center p-4 show-product">
        <img
          className={'img-fluid text-center'}
          height={'auto'}
          width={400}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="col-12 col-xl-6 show-product-description">
        <div className="d-sm-flex flex-column justify-content-center p-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="mb-4">{product.title}</h1>
          <p className="lead text-danger py-2 m-0">
            Rating {product.rating && product.rating.rate} &nbsp;
            <i className="fa fa-star"></i>
          </p>
          <h3 className="my-4">£{product.price}</h3>
          <p className="lead text-center text-sm-start">
            {product.description}
          </p>

          <div className="button-wrapper">
            <button
              onClick={() => addProduct(product)}
              className="add-product btn btn-outline-dark p-0 mb-4"
            >
              <SlideInUpDiv>{cartBtn}</SlideInUpDiv>
            </button>
            <button
              className={`goto btn btn btn-dark py-2' 
                ${cartItems.length === 0 ? 'disabled' : ''}
              `}
            >
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
                to="/cart"
              >
                Go to Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <FadeInDiv>
      <div className="container">
        <div
          style={{ height: '100%', margin: '3rem 0' }}
          className="col-12 d-flex flex-wrap"
        >
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </FadeInDiv>
  );
};

export default Product;
