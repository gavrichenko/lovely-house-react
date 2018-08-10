import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import {Provider} from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

// imported components
import App from './components/App';
// import './index.css';
// import ArticleList from "./components/ArticleList/ArticleList";
// import Counter from './components/Counter';
// import SelectFilter from './components/Filter';

// registerServiceWorker();

ReactDOM.render(
  (
    <Provider store = {store}>
      <div>
        <App />
        {/*<Counter />*/}
        {/*<SelectFilter />*/}
        {/*<ArticleList />*/}
      </div>
    </Provider>

  ), document.getElementById('root'));
