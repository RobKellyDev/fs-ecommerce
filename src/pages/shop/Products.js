import React, { useEffect, useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SmallHero from '../../components/SmallHero'
// styles
import '../../styles/components/Products.scss'
import '../../styles/components/Header.scss'
import { FadeInDiv } from '../../components/animations/FadeInDiv'

// images
import heroCycling from '../../assets/images/hero-cycling.png'
//lazysizes
import 'lazysizes'
// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BASE_URL = 'https://fakestoreapi.com'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  let [loading, setLoading] = useState(true)

  const getProducts = useCallback(async () => {
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
      },
    }
    const handleProductsAPI = async () =>
      await fetch(`${BASE_URL}/products`, options).catch((err) =>
        console.log(err)
      )

    let items = await JSON.parse(localStorage.getItem('products'))
    if (isLocalStorageEmpty()) {
      let response = await handleProductsAPI()
      let items = await response.json()
      setData(items)
      setFilter(items)
      localStorage.setItem('products', JSON.stringify(items))
      return setLoading(false)
    }
    setData(items)
    setFilter(items)
    return setLoading(false)
  }, [])

  useEffect(() => {
    let responseProducts = getProducts()
    return () => responseProducts
  }, [getProducts])

  const isLocalStorageEmpty = () => {
    return JSON.parse(localStorage.getItem('products')) == null ||
      typeof JSON.parse(localStorage.getItem('products')) === 'string' ||
      JSON.parse(localStorage.getItem('products')).length === 0
      ? true
      : false
  }

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
  )

  const filterProduct = (cat) =>
    setFilter(data.filter((itm) => itm.category === cat))

  const ShowProducts = () => {
    return (
      <>
        <div className="col-12 d-flex flex-column flex-sm-row justify-content-between btn-group buttons mb-5 products-filters">
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

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 latest-products mb-5">
          {data &&
            filter.map((product) => {
              return (
                <FadeInDiv key={product.id}>
                  <div className="col latest-single">
                    <div className="card h-100">
                      <img
                        style={{
                          aspectRatio: 'auto',
                          objectFit: 'scale-down',
                          width: '100%',
                          height: '250px',
                          padding: '3rem',
                        }}
                        data-src={product.image}
                        data-sizes={'auto'}
                        data-srcset={product.image}
                        className={'card-img-top lazyload'}
                        alt={product.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text fs-5 text-danger">
                          {' '}
                          £{product.price}
                        </p>
                        <p className="latest-buy-now">
                          <Link
                            to={`/products/${product.id}`}
                            className="btn btn-outline-dark w-100"
                          >
                            Buy Now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInDiv>
              )
            })}
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 latest-products mb-5">
          <section className="d-flex flex-column my-5">
            <h3 className="mt-5">Section to be....</h3>
          </section>
        </div>
      </>
    )
  }

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

              <h1 className="display-2 display-5 mt-5 text-center">
                Latest Products
              </h1>
              <hr />
            </header>
          </div>
        </div>

        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  )
}

export default Products
