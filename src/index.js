import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// data of articles
import {articles} from "./fixtures/fixtures";

// imported components
import ArticleList from "./components/ArticleList/ArticleList";

registerServiceWorker();

ReactDOM.render(<ArticleList articleData = {articles} />, document.getElementById('root'));
