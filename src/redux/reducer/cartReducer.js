const initialState = {
  cartItems: [],
  currentItem: {},
  cartTotalItems: 0,
  cartTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD':
      let itemExist = undefined;
      const item = action.payload;
      itemExist = state.cartItems.find(itm => itm.id === item.id);
      if (itemExist) {
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
      //need qty prop
      item.qty = 1;
      return {
        ...state,
        cartItems: state.cartItems.concat(item),
        currentItem: item,
      };

    case 'CART_UPDATE':
      let id = action.payload.id;
      let qty = action.payload.qty;

      let updatedCartItems = state.cartItems.map(itm => {
        if (itm.qty === 0 && qty < 0) return itm;
        if (itm.qty === 0 && qty > 0) return { ...itm, qty: (itm.qty += qty) };

        return itm.id === id && itm.qty > 0
          ? { ...itm, qty: (itm.qty += qty) }
          : { ...itm };
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case 'CART_TOTAL_ITEMS':
      return {
        ...state,
        cartTotalItems: action.payload,
      };

    case 'CART_CLEAR':
      return initialState;

    case 'CART_DELETE':
      //debugger;
      let store = [];
      let delItem = action.payload;

      delItem = state.cartItems.find(itm => itm.id === delItem.id);
      let remainingItems = state.cartItems.filter(itm => itm.id !== delItem.id);

      if (delItem.qty <= 1) {
        store = store.concat(remainingItems);
      } else if (delItem.qty > 1) {
        store = [...store, ...remainingItems];
        delItem.qty = delItem.qty - 1;
        store = store.concat(delItem);
      }

      return {
        ...state,
        cartItems: store,
      };

    case 'CART_TOTAL_PRICE':
      let total = Math.round(action.payload).toFixed(2);
      return {
        ...state,
        cartTotalPrice: total,
      };

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
