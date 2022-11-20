const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const productState = {
  products: [],
  numOfProducts: 0,
};

const getProductsAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProductAction = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.products;
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numOfProducts: state.numOfProducts + 1,
      };
    default:
      return state;
  }
};

const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

const cartState = {
  items: [],
  numOfCartItem: 0,
};

const getCartsAction = () => {
  return {
    type: GET_CARTS,
  };
};

const addCartAction = (value) => {
  return {
    type: ADD_CART,
    payload: value,
  };
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        items: [...state.items, action.payload],
        numOfCartItem: state.numOfCartItem + 1,
      };

    case GET_CARTS:
      return {
        items: state.items,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ productReducer, cartReducer });
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProductAction("Mango"));
store.dispatch(addProductAction("Jackfruite"));
store.dispatch(addProductAction("Guova"));
store.dispatch(addCartAction("Banana"));

store.dispatch(getProductsAction());
store.dispatch(getCartsAction());
