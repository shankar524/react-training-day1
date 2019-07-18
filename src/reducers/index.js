const initialState = {
  list: [],
};
const listReducer = (state = initialState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  console.log('In reducer');
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      console.log('payload rcvd', action.payload);
      state.list = action.payload;
      return Object.assign({}, state, {
        list: action.payload,
      });
    default:
      return state;
  }
};
export default listReducer;
