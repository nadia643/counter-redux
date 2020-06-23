import React, { useState } from "react";
import { connect } from 'react-redux';
import { decrease, increase, reset, modalOpen } from "./actions";


function Counter({ name, count, increase, decrease, reset, modalOpen }) {
  

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
          onClick={() => {
            reset()
            modalOpen("susan", 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nulla libero tempore quam quos blanditiis tempora, adipisci labore expedita perferendis fuga sapiente praesentium ea minima reiciendis maiores mollitia odio a");
            
          }}>
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

function mapStateToProps({countState: {count, name}}) {
  return { count: count, name: name }
}


// function mapDispatchToProps(dispatch, ownProps) {
//   console.log(ownProps);
  
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset())
//       dispatch(modalOpen(
//         "susan", 
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nulla libero tempore quam quos blanditiis tempora, adipisci labore expedita perferendis fuga sapiente praesentium ea minima reiciendis maiores mollitia odio a"));
//     }
//   }
// }

export default connect(mapStateToProps, {
  increase, 
  reset, 
  decrease,
  modalOpen
}) (Counter);
