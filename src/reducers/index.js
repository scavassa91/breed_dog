import { combineReducers } from 'redux';
import BreedReducer from './reducer_breed';

const rootReducer = combineReducers({
  breeds: BreedReducer
});

export default rootReducer;
