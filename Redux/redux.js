const createStore = (reducer, middleware = null) => {
  const store = {};
  store.state = "";
  store.listeners = [];

  store.getState = () => store.state;
  store.subscribe = (listener) => store.listeners.push(listener);

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach((listener) => listener());
  };

  return store;
};

export default createStore;
