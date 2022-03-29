import React, { useEffect, useState } from 'react'
import { ProductSingle } from '../../components/product-single'
import Breadcrumbs from '../../components/Breadcrumbs'
import { handleProductsAPI } from '../../helpers'
import { SmallHero } from '../../components/small-hero'
import { Loading } from '../../helpers'
// styles
import '../../styles/components/Products.scss'
// images
import heroCycling from '../../assets/images/webp/hero-cycling.webp'
//lazysizes
import 'lazysizes'

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  let [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchData() {
      try {
        let response = await handleProductsAPI()
        let products = await response.json()
        setData(products)
        setFilter(products)
        return setLoading(false)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
    fetchData()
    return () => {
      return fetchData
    }
  }, [])

  const filterProduct = (cat) =>
    setFilter(data.filter((itm) => itm.category === cat))

  const ShowProducts = () => (
    <>
      <div className="d-flex w-100 flex-column flex-sm-row justify-content-between btn-group buttons mb-5 products-filters">
        <button
          className="btn btn-outline-dark mb-3 mb-md-0 px-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          onClick={() => filterProduct("men's clothing")}
          className="btn btn-outline-dark mb-3 mb-md-0 px-2"
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProduct("women's clothing")}
          className="btn btn-outline-dark mb-3 mb-md-0 px-2"
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProduct('jewelery')}
          className="btn btn-outline-dark mb-3 mb-md-0 px-2"
        >
          Jewellery
        </button>
        <button
          onClick={() => filterProduct('electronics')}
          className="btn btn-outline-dark mb-3 mb-md-0 px-2"
        >
          Electronics
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 latest-products mb-5">
        {data &&
          filter.map(
            (product) =>
              // eslint-disable-next-line
              console.log('B list') || (
                <ProductSingle key={product.id} product={product} />
              )
          )}
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
        width={2048}
        className={'smallHero'}
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
