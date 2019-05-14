import { createStore, combineReducers } from 'redux';
import responseReducer from '../reducers/responseReducer';

const rootReducer = combineReducers({
  response: responseReducer
});

export default store =createStore(
  rootReducer
  );
