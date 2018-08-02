import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import SimpleComponent from './components/SimpleComponent/SimpleComponent';
import {articles} from "./fixtures/fixtures";

import Article from './components/Article/Article';
import ArticleList from "./components/ArticleList/ArticleList";

// ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
registerServiceWorker();

const articleDataFromFixtures = articles[0];

ReactDOM.render(<Article articleData = {articleDataFromFixtures} />, document.getElementById('root'));
// ReactDOM.render(<ArticleList articleData = {articleDataFromFixtures} />, document.getElementById('root'));
