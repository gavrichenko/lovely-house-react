import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import filterReducer from './filters';
import flowersReduser from './flowers';

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filters: filterReducer,
  flowers: flowersReduser,
});