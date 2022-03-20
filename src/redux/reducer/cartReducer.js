import { actionTypes } from '../action-types'

const initialState = {
  cartItems: [],
  currentItem: {},
  cartTotalItems: 0,
  cartTotalPrice: 0,
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CART_ADD:
      let itemExist = undefined
      itemExist = state.cartItems.find((itm) => itm.id === payload.id)
      if (itemExist) {
        return {
          ...state,
          cartItems: [...state.cartItems],
        }
      }
      //need qty prop
      payload.qty = 1
      return {
        ...state,
        cartItems: state.cartItems.concat(payload),
        currentItem: payload,
      }

    case actionTypes.CART_UPDATE:
      let id = payload.id
      let qty = payload.qty

      let updatedCartItems = state.cartItems.map((itm) => {
        if (itm.qty === 0 && qty < 0) return itm
        if (itm.qty === 0 && qty > 0) return { ...itm, qty: (itm.qty += qty) }

        return itm.id === id && itm.qty > 0
          ? { ...itm, qty: (itm.qty += qty) }
          : { ...itm }
      })

      return {
        ...state,
        cartItems: updatedCartItems,
      }

    case actionTypes.CART_TOTAL_ITEMS:
      return {
        ...state,
        cartTotalItems: payload,
      }

    case actionTypes.CART_CLEAR:
      return initialState

    case actionTypes.CART_DELETE:
      let store = []
      let delItem = payload

      delItem = state.cartItems.find((itm) => itm.id === delItem.id)
      let remainingItems = state.cartItems.filter(
        (itm) => itm.id !== delItem.id
      )

      if (delItem.qty <= 1) {
        store = store.concat(remainingItems)
      } else if (delItem.qty > 1) {
        store = [...store, ...remainingItems]
        delItem.qty = delItem.qty - 1
        store = store.concat(delItem)
      }

      return {
        ...state,
        cartItems: store,
      }

    case actionTypes.CART_TOTAL_PRICE:
      let total = Math.round(payload).toFixed(2)
      console.log('total is ', total)
      return {
        ...state,
        cartTotalPrice: total,
      }

    default:
      return {
        ...state,
      }
  }
}

export default cartReducer
