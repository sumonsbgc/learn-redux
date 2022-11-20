const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};

const incrementAction = (value = null) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrementAction = (value = null) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction(2));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(2));
store.dispatch(decrementAction(2));
