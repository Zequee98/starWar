import { combineReducers } from 'redux';

import films from './films'
import characters from './characters'

const allReducers = combineReducers({
  films,
  characters
});

export default allReducers;
