import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = [thunk, promise];

// if (process.env.NODE_ENV !== 'production') middleware.push(createLogger());

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
