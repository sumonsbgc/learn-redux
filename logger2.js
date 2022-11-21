const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Initial State
const initialState = {
  isLoading: false,
  isSuccess: false,
  products: [],
};

// Actions
const PRODUCT_ACTION = "PRODUCT_ACTION";
const productAction = (payload) => {
  return {
    type: PRODUCT_ACTION,
    payload,
  };
};

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTION: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

// middleware
const middleware = applyMiddleware(logger);

// store
const store = createStore(productReducer, middleware);

store.subscribe(() => console.log(store.getState()));

store.dispatch(
  productAction({ products: ["Mango"], isSuccess: true, isLoading: false })
);
