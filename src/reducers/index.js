import { combineReducers } from 'redux';
import IncrementReducer from './increment_reducer';

const rootReducer = combineReducers({
  num: IncrementReducer
});

export default rootReducer;
