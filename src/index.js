import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// data of articles
import {articles} from "./fixtures/fixtures";

// imported components
import ArticleList from "./components/ArticleList/ArticleList";
import Select from 'react-select';

registerServiceWorker();

// list of options for react select component
const optionsForSelect = articles.map((article) => {
  return {value: article.id, label: article.title};
});

ReactDOM.render(
  (
    <div>
      <Select options={optionsForSelect} isClearable isMulti/>
      <ArticleList articleData = {articles} />
    </div>

  ), document.getElementById('root'));
