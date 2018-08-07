import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux';

// imported components
import ArticleList from "./components/ArticleList/ArticleList";
import Counter from './components/Counter';
import SelectFilter from './components/Filter';

registerServiceWorker();

ReactDOM.render(
  (
    <Provider store = {store}>
      <div>
        <Counter />
        <SelectFilter />
        <ArticleList />
      </div>
    </Provider>

  ), document.getElementById('root'));
