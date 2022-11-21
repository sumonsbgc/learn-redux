const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//state
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  products: [],
  errors: "",
  message: "",
};

// actions
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const getProductActions = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const createProductAction = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

// Reducers

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        isSuccess: true,
        products: [...state.products, action.payload],
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

// combineReducers
// applyMiddleware
// createStore();
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createProductAction("T-Shirt"));
// store.dispatch(createProductAction("Jewlry"));
// store.dispatch(createProductAction("Shirt"));
