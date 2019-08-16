import { combineReducers } from 'redux';

import todo from './todo'

const allReducers = combineReducers({
  todo
});

export default allReducers;
