//import {combineReducers} from 'redux';
import FETCH_PHOTO_DATA from '../actions/index';

const rootReducer = (
  state = {
    photos: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PHOTO_DATA:
      const photos = action.payload.items;
      return {
        ...state,
        photos,
      };
    default:
      return state;
  }
};

export default rootReducer;
