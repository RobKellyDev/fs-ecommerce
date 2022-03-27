import React from 'react'
// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BASE_URL = process.env.REACT_APP_BASE_URL

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
}

export const handleProductsAPI = async () => {
  let res = await fetch(`${BASE_URL}/products`, options)
  if (res.ok) return res
}

export const handleProductAPI = async (id) => {
  let res = await fetch(`${BASE_URL}/products/${id}`, options)
  if (res.ok) return res
}

export const isLocalStorageEmpty = (name) =>
  JSON.parse(localStorage.getItem(name)) == null ? true : false

export const Loading = () => (
  <div className="row mt-5">
    <div className="col-12 col-md-3 col-lg-3 mb-4 g-4" style={{}}>
      <Skeleton height={375} width={310} />
    </div>
    <div className="col-12 col-md-3 col-lg-3 mb-4 g-4" style={{}}>
      <Skeleton height={375} width={310} />
    </div>
    <div className="col-12 col-md-3 col-lg-3 mb-4 g-4" style={{}}>
      <Skeleton height={375} width={310} />
    </div>
    <div className="col-12 col-md-3 col-lg-3 mb-4 g-4" style={{}}>
      <Skeleton height={375} width={310} />
    </div>
  </div>
)

export const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))

export const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))
