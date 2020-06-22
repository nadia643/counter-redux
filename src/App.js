import React from "react";
import Counter from "./Counter";
import { createStore } from 'redux';

// setup initial state 
const defaultState = {
  count: 54,
  name: "nadia"
}

// setup reducer
function reducer(state, action) {
  // console.log({ state, action})
  // if(action.type === "DECREASE") {
    // state.count = state.count -1;
    // return state;
    // return {...state, count: state.count - 1}
//   }
switch(action.type) {
  case "DECREASE": 
    return {...state, count: state.count - 1}
  case "INCREASE": 
      return {...state, count: state.count + 1};
  case "RESET": 
      return {...state, count: 0};

      default:
        return state;
}
  
}

// setup store - the 2 arguments are the old state or the state
// before update, and then is the action (what we want to do)
const store = createStore(reducer, defaultState);

store.dispatch({ type: "RESET" })
store.dispatch({ type: "DECREASE" })
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "INCREASE" })


console.log(store.getState());

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
