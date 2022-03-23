import React, { useEffect, useState, useCallback } from 'react'
import SmallHero from '../../components/SmallHero'
import ProductSingle from '../../components/ProductSingle'
import Breadcrumbs from '../../components/Breadcrumbs'
import { handleProductsAPI, isLocalStorageEmpty } from '../../helpers'
import { Loading } from '../../helpers'
// styles
import '../../styles/components/Products.scss'
import '../../styles/components/Header.scss'
// images
import heroCycling from '../../assets/images/hero-cycling.png'
//lazysizes
import 'lazysizes'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  let [loading, setLoading] = useState(true)

  const getProducts = useCallback(async () => {
    let items = await JSON.parse(localStorage.getItem('products'))

    const handleProducts = async () => await handleProductsAPI()

    if (isLocalStorageEmpty('products')) {
      let response = await handleProducts()
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
    getProducts()
    return () => getProducts
  }, [getProducts])

  const filterProduct = (cat) =>
    setFilter(data.filter((itm) => itm.category === cat))

  const ShowProducts = () => (
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
        {data.length > 0 &&
          filter.map((product) => (
            <ProductSingle key={product.id} product={product} />
          ))}
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 latest-products">
        <section className="d-flex flex-column my-5">
          <h3 className="mt-5">Section to be....</h3>
        </section>
      </div>
    </>
  )

  return (
    <div className="all-products text-center w-100">
      <SmallHero
        banner={heroCycling}
        height={268}
        className={'small-hero'}
        alt={'Products'}
      />
      <div className="container">
        <Breadcrumbs />
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  )
}

export default Products
