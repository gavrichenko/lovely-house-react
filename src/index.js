import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleComponent from './components/SimpleComponent/SimpleComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
registerServiceWorker();
