import {combineReducers} from 'redux';

const rootReducer = (
  state: {
    photos: [],
  },
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
