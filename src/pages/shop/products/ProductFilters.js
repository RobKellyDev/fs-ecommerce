import React from 'react'

const ProductFilters = ({ data, setFilter, filterProduct }) => (
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
)

export default ProductFilters
