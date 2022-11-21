const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: logger } = require("redux-logger");
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10";
//state
const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: "",
};

// actions
const GET_POSTS = "GET_POSTS";
const getPostAction = (payload) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

// Reducers
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getPostAction({ isLoading: true, error: false, posts: [] }));
    axios
      .get(API_URL)
      .then((res) => {
        dispatch(
          getPostAction({
            isLoading: false,
            posts: res.data,
            isError: false,
          })
        );
      })
      .catch((err) => {
        // console.log(err.response.statusText);
        dispatch(
          getPostAction({
            isLoading: false,
            isError: true,
            error: err.response.statusText,
          })
        );
      });
  };
};

// middleware
const enhancer = applyMiddleware(thunk, logger);

// store
const store = createStore(postReducer, enhancer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchData());
