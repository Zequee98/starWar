import { combineReducers } from 'redux';

import films from './films'
import characters from './characters'
import drawer from './drawer'

const allReducers = combineReducers({
  films,
  characters,
  drawer
});

export default allReducers;
