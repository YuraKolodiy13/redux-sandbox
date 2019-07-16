import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rand}) => {
  return(
    <div>
      <h2 className="result">{counter}</h2>
      <button className="plus btn btn-primary" onClick={inc}>+</button>
      <button className="minus btn btn-primary" onClick={dec}>-</button>
      <button className="plusRand btn btn-primary" onClick={rand}>+ Random</button>
    </div>
  )
};

const mapStateToProps = state => {
  return{
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);