import { combineReducers } from 'redux';
// Import reducers
import BreedReducer from './reducer_breed';
import ImageReducer from './reducer_image';
import ActiveBreed from './reducer_active_breed';

/**
 * Combine all the reducers
 */
const rootReducer = combineReducers({
  BreedReducer,
  ImageReducer,
  ActiveBreed
});

export default rootReducer;
