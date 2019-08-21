import { DRAWER_CLOSE, DRAWER_OPEN, CHANGE_DATA } from '../actions/drawer';

const INITIAL_STATE = {
  open: false,
  item: false
};

const films = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DRAWER_OPEN:
    return {
      ...state,
      open: true,
      item: action.payload.item
    };
  case DRAWER_CLOSE:
    return {
      ...state,
      open: false,
      item: false
    };
  case CHANGE_DATA:
    return {
      ...state,
      open: true,
      item: action.payload.item
    };

  default:
    return state;
  }
};
export default films;
