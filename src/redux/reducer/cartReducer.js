let cart = [];

const cartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      const existedAdded = state.find((itm) => itm.id === product.id);
      if (existedAdded) {
        // increase qty
        return state.map((itm) =>
          itm.id === product.id
            ? {
                ...itm,
                qty: itm.qty + 1,
              }
            : itm
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      const existedDel = state.find((itm) => itm.id === product.id);
      if (existedDel.qty === 1) {
        return state.filter((itm) => itm.id !== existedDel.id);
      } else {
        return state.map((itm) =>
          itm.id === product.id
            ? {
                ...itm,
                qty: itm.qty - 1,
              }
            : itm
        );
      }

    case "UPDATE_ITEM":
      return;

    default:
      return state;
  }
};

export default cartReducer;
