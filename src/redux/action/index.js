// CART actions

// Add item to cart
export const addItemCart = item => {
  return {
    type: 'CART_ADD',
    payload: item,
  };
};

// Delete Item from cart
export const delItemCart = item => {
  return {
    type: 'CART_DELETE',
    payload: item,
  };
};

// Update Item in cart
export const updateItemCart = (item, qty) => {
  let itemUpdate = {};
  itemUpdate.id = item.id;
  itemUpdate.qty = qty;
  return {
    type: 'CART_UPDATE',
    payload: itemUpdate,
  };
};

export const clearCart = () => {
  return {
    type: 'CART_CLEAR',
  };
};

export const getCartTotal = items => {
  let sum = 0;

  if (items.length > 0) {
    sum = items
      .map(itm => itm.price * itm.qty)
      .reduce((total, price) => total + price);
  }

  return {
    type: 'CART_TOTAL_PRICE',
    payload: sum,
  };
};

export const totalCartItems = items => {
  let count = 0;
  items &&
    items.map(itm =>
      Number(itm.qty) > 1 ? (count += Number(itm.qty)) : Number((count += 1)),
    );

  return {
    type: 'CART_TOTAL_ITEMS',
    payload: count,
  };
};
