import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import langReducer from './reducers/langReducer';

const INITIAL_STATE = { lang: 'en' };

const store = createStore(langReducer, composeWithDevTools());

export default store;
