import React, { useEffect, useState } from 'react';
import 'lazysizes';
import { Link, NavLink } from 'react-router-dom';
import SmallHero from '../../components/SmallHero';
import '../../styles/components/Products.scss';
import heroCycling from '../../assets/images/hero-cycling.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const URL = 'https://fakestoreapi.com';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let [loading, setLoading] = useState(true);

  const handleProductsAPI = async () => await fetch(`${URL}/products`);

  const isLocalStorageEmpty = () => {
    return JSON.parse(localStorage.getItem('products')) == null ||
      typeof JSON.parse(localStorage.getItem('products')) === 'string' ||
      JSON.parse(localStorage.getItem('products')).length === 0
      ? true
      : false;
  };

  useEffect(() => {
    const getProducts = async () => {
      if (isLocalStorageEmpty()) {
        let response = await handleProductsAPI();
        let items = await response.json();
        setData(items);
        setFilter(items);
        localStorage.setItem('products', JSON.stringify(items));
        return setLoading(false);
      } else if (!isLocalStorageEmpty()) {
        let items = await JSON.parse(localStorage.getItem('products'));
        setData(items);
        setFilter(items);
        return setLoading(false);
      }
    };
    let responseProducts = getProducts();
    return () => responseProducts;
  }, []);

  const Loading = () => (
    <div className="row">
      <div className="col-12 col-sm-6 col-lg-4 mb-4" style={{ lineHeight: 2 }}>
        <Skeleton height={570} width={410} />
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mb-4" style={{ lineHeight: 2 }}>
        <Skeleton height={570} width={410} />
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mb-4" style={{ lineHeight: 2 }}>
        <Skeleton height={570} width={410} />
      </div>
    </div>
  );

  const filterProduct = cat =>
    setFilter(data.filter(itm => itm.category === cat));

  const ShowProducts = () => {
    return (
      <div className="row">
        <div className="col-12 d-flex flex-column flex-sm-row justify-content-between btn-group buttons mb-5">
          <button
            className="btn btn-outline-dark mb-3 mb-sm-0 px-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark mb-3 mb-sm-0 px-2"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark mb-3 mb-sm-0 px-2"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct('jewelery')}
            className="btn btn-outline-dark mb-3 mb-sm-0 px-2"
          >
            Jewellery
          </button>
          <button
            onClick={() => filterProduct('electronics')}
            className="btn btn-outline-dark mb-3 mb-sm-0 px-2"
          >
            Electronics
          </button>
        </div>

        {data &&
          filter.map(product => {
            return (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="d-flex flex-column card w-100 text-center p-2">
                  <img
                    style={{
                      aspectRatio: 'auto',
                      objectFit: 'scale-down',
                      width: '100%',
                      height: '340px',
                      padding: '1.25rem 0.5rem',
                    }}
                    data-src={product.image}
                    data-sizes={'auto'}
                    data-srcset={product.image}
                    className={'card-img-top lazyload'}
                    alt={product.title}
                    height="340"
                    width="600"
                  />

                  <div className="card-body mt-4 px-4">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text p-3 fs-3 text-danger lead fw-bold">
                      £{product.price}
                    </p>

                    <div className="d-grid col-12 mx-auto">
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className="all-products text-center w-100">
      <SmallHero
        banner={heroCycling}
        height={268}
        className={'small-hero'}
        alt={'Products'}
      />

      <div className="container">
        <div className="all-products-breadcrumbs">
          <div className="row">
            <header className="col-12 mb-5 mt-3 px-4">
              <nav role="navigation" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item text-uppercase">
                    <NavLink className="" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item text-uppercase">
                    <NavLink aria-current="page" className="" to="/products">
                      Products
                    </NavLink>
                  </li>
                </ol>
              </nav>

              <h2 className="display-2 display-5 mt-5 text-center">
                Latest Products
              </h2>
              <hr />
            </header>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="show-all-products">
            <ShowProducts />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
