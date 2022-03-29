import React from 'react'
// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BASE_URL = process.env.REACT_APP_BASE_URL

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    mode: 'no-cors',
  },
}

export const handleProductsAPI = async () => 
  await fetch(`${BASE_URL}/products`, options)


export const handleProductAPI = async (id) => 
  await fetch(`${BASE_URL}/products/${id}`, options)


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

export const loadJSON = (key) =>
  key && JSON.parse(localStorage.getItem(key))

export const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))
