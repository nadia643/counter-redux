import React from "react";
import Counter from "./Counter";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from'redux-devtools-extension';
// reducers
import countReducer from "./countReducer";

// setup initial state
const defaultState = {
  count: 0,
  name: "nadia",
};

// setup store - the 2 arguments are the old state or the state
// before update, and then is the action (what we want to do)
const store = createStore(
  countReducer, 
  defaultState,
  composeWithDevTools()
  );

// store.dispatch({ type: RESET });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });

console.log(store.getState());

const App = () => {
  return (  
  <Provider store={store}>
    <Counter random="random value" />;
  </Provider>
  
  )
};

export default App;
