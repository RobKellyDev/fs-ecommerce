import React from 'react'
// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



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
