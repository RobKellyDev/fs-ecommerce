import { loadJSON } from './helpers'

const BASE_URL = process.env.REACT_APP_BASE_URL

const LoadProductsAPI = async () => {
  const headers = new Headers()
  headers.append('Access-Control-Request-Method', 'GET')
  headers.append(
    'Access-Control-Request-Headers',
    'Content-Type',
    'Accept'
  )
  const productsOptions = {
    method: 'GET',
    headers,
    mode: 'cors',
  }

  if(loadJSON('products')) return loadJSON('products');

  return fetch(`${BASE_URL}/products`, productsOptions)
}

export default LoadProductsAPI
