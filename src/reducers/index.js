import { combineReducers } from 'redux';
import BreedReducer from './reducer_breed';
import ImageReducer from './reducer_image';

const rootReducer = combineReducers({
  BreedReducer,
  ImageReducer
});

export default rootReducer;
