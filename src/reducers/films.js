import { GET_FILMS } from '../actions/films';

const INITIAL_STATE = {
  isFetching: false,
  didInvalidate: false,
  list: [],
};

const films = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case `${GET_FILMS}_REJECTED`:
    return {
      ...state,
      isFetching: false,
      didInvalidate: true,
      list: []
    };
  case `${GET_FILMS}_PENDING`:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
      list: []
    };
  case `${GET_FILMS}_FULFILLED`:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      list: action.payload.data.results
    };
  default:
    return state;
  }
};
export default films;
