// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BASE_URL = process.env.REACT_APP_BASE_URL

const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Accept-Charset': 'utf-8',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export const handleProductsAPI = async () =>
  await fetch(`${BASE_URL}/products`, options).catch((err) => console.log(err))

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
