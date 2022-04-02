import { loadJSON, saveJSON } from "./helpers";

/**
 *  @fn LoadProductsAPI
 *  @fn [getToken] - Signin to Firestore database with email/password
 *  @fn [getProductsWithToken] - It passes token to read '/products' endpoint
 *
 *  ≈ Reference: [fb-store] folder - cloud function endpoint.
 */


const LoadProductsAPI = async () => {

  const getToken = async () => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const body = JSON.stringify({
      email: process.env.REACT_APP_EMAIL,
      password: process.env.REACT_APP_PASSWORD,
      returnSecureToken: true,
    })
    const signInOptions = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow',
    }

    return fetch(`
      https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
          ${process.env.REACT_APP_API_KEY}
        `,
      signInOptions
    )
    .then((res) => res.json())
      .then((result) => {
        let isToken = result.idToken
        isToken ? saveJSON('token', isToken) : false;
        return isToken
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  }

  const getProductsWithToken = async (token) => {
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json')
    let reqOptions = {
      method: 'GET',
      headers,
    }
    return fetch(process.env.REACT_APP_PRODUCTS_TOKEN_URL, reqOptions)
        .then((res) => res.json())
        .then(results => {//save products local storage
          results ? saveJSON('products', results) : false;
          return results
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error)) 
  }

  try {
   
    if(loadJSON('token' !== null)) {//token
      const token = loadJSON('token')
      return getProductsWithToken(token)
    }
    return getProductsWithToken(await getToken())

  } catch(error) {

    // eslint-disable-next-line no-console
    console.log(error)
  }

}


export default LoadProductsAPI
