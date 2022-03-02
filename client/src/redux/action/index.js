// CART actions

// Add Item to cart
export const addItemCart = product => {
  return {
    type: 'ADD_ITEM',
    payload: product
  }
}


// Delete Item from cart
export const delItemCart = product => {
  return {
    type: 'DELETE_ITEM',
    payload: product
  }
}

// Update Item in cart
export const updateItemCart = product => {
  return {
    type: 'UPDATE_ITEM',
    payload: product
  }
}


