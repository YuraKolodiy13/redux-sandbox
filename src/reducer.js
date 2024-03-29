const reducer = (state = 0, action) => {
  if(action.type === 'INC'){
    return state + 1;
  }
  if(action.type === 'DEC'){
    return state - 1;
  }
  if(action.type === 'RAND'){
    return state + action.value;
  }
  return state;
};

export default reducer;