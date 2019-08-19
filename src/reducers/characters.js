import { GET_CHARACTERS } from '../actions/characters';

const INITIAL_STATE = {
  isFetching: false,
  didInvalidate: false,
  data: {},
};

const films = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case `${GET_CHARACTERS}_REJECTED`:
    return {
      ...state,
      isFetching: false,
      didInvalidate: true,
      data: {}
    };
  case `${GET_CHARACTERS}_PENDING`:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
      data: {}
    };
  case `${GET_CHARACTERS}_FULFILLED`:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      data: action.payload.data
    };
  default:
    return state;
  }
};
export default films;
