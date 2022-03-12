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
      itemExist = state.cartItems.find(
        itm => itm.id === item.id,
      );

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
      state.cartItems.find(itm => {
        if (itm.id === action.payload.id) {
          itm.qty += itm.qty >= 0 ? action.payload.qty : 0;
          if (itm.qty < 0) {
            itm.qty = 0;
            return {
              ...state,
              cartItems: state.cartItems.concat(itm),
            };
          } else
            return {
              ...state,
              cartItems: state.cartItems.concat(itm),
            };
        }
        return {
          ...state,
        };
      });

    case 'CART_TOTAL_ITEMS':
      console.log('total items ', action.payload);
      return {
        ...state,
        cartTotalItems: action.payload,
      };

    case 'CART_CLEAR':
      return initialState;

    case 'CART_DELETE':
      let store = [];
      let delItem = action.payload;

      delItem = state.cartItems.find(
        itm => itm.id === delItem.id,
      );
      let remainingItems = state.cartItems.filter(
        itm => itm.id !== delItem.id,
      );
      delItem[0].qty -= 1;

      if (delItem[0].qty === 0) {
        //remove
        store = store.concat(remainingItems);
      } else if (delItem[0].qty > 0) {
        store = [...remainingItems, ...delItem];
      }

      return {
        ...state,
        cartItems: store,
      };

    case 'CART_TOTAL_PRICE':
      console.log('total price ', action.payload);
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
