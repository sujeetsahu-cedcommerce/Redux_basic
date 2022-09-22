import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Initial number of Cakes in Store: 10</h1>
      {props.numOfCakes > 0 ? (
        <>
          <h2>Number of Cakes - {props.numOfCakes}</h2>
          <button onClick={props.buyCake}>Buy Cake</button>
        </>
      ) : (
        <>
          <h2>Number of Cakes - {props.numOfCakes}</h2>
          <h3 style={{ color: "red" }}>Can't buy stock is over</h3>
          <button>Buy Cake</button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
