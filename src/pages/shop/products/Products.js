import React, { useEffect, useState, useCallback } from 'react'
import { ProductSingle } from './product-single'
import Breadcrumbs from './Breadcrumbs'
import { SmallHero } from './small-hero'
import ProductFilters from './ProductFilters'
import axios from 'axios'
import { Loading, loadJSON, saveJSON } from '../../../helpers'

// styles
import '../../../styles/components/Products.scss'
//lazysizes
import 'lazysizes'

const BASE_URL = process.env.REACT_APP_BASE_URL

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(true)

  const filterProduct = useCallback(
    (cat) => setFilter(data.filter((itm) => itm.category === cat)),
    [data]
  )


  useEffect(() => {

    if(loadJSON('products')) {
      let response = loadJSON('products');
      setData(response);
      setFilter(response)
      return setLoading(false);
    }

    const fetchData = () => {
      axios
        .get(`${BASE_URL}/products`)
        .then((response) => {
         let data = response.data;
          setData(data);
          setFilter(data);
          saveJSON('products', data);
          return setLoading(false);
        })
    }
    fetchData();

    return () => fetchData
  },[])




  const ShowProducts = () => (
    <>
      <ProductFilters
        data={data}
        filter={filter}
        filterProduct={filterProduct}
        setFilter={setFilter}
      />

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 latest-products mb-5">
        {data &&
          filter.map((product) => (
            <ProductSingle key={product.id} product={product} />
          ))}
      </div>
    </>
  )

  return (
    <div className="all-products text-center w-100">
      <SmallHero />
      <div className="container">
        <Breadcrumbs />
        {loading ? <Loading /> : <ShowProducts />}

        <div className="row row-cols-1 row-cols-md-4 g-4 latest-products">
          <section className="d-flex flex-column my-5">
            <h3 className="mt-5">Section to be....</h3>

          </section>


        </div>
      </div>
    </div>
  )
}

export default Products
