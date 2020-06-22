import React, { useState } from "react";
import { connect } from 'react-redux';
import { DECREASE, RESET, INCREASE } from "./actions";


function Counter({name, count, increase, decrease, reset}) {
  

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>{name}</h2>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button 
          type="button" 
          className="btn" 
          onClick={decrease}>
          Decrease
        </button>
        <button 
          type="button" 
          className="btn" 
          onClick={reset}>
          Reset
        </button>
        <button 
          type="button" 
          className="btn" 
          onClick={increase}>
          Increase
        </button>
      </div>
    </div>
    );
}

function mapStateToProps(state) {
  console.log(state);
  return { count: state.count, name: state.name }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  
  return {
    increase: () => dispatch({type: INCREASE}),
    decrease: () => dispatch({type: DECREASE}),
    reset: () => dispatch({type: RESET})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter);
