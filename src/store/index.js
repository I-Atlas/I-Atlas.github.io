import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootRerucer from './rootReducer';

export default createStore(rootRerucer, applyMiddleware(thunk));