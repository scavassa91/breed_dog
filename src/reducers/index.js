import { combineReducers } from 'redux';
import BreedReducer from './reducer_breed';
import ImageReducer from './reducer_image';
import ActiveBreed from './reducer_active_breed';

const rootReducer = combineReducers({
  BreedReducer,
  ImageReducer,
  ActiveBreed
});

export default rootReducer;
