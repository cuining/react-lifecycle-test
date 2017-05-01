import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

console.info('----------当首次装载组件时----------')
ReactDOM.render(<App />, document.getElementById('root'));
console.info('----------卸载组件时----------')
ReactDOM.unmountComponentAtNode(document.getElementById('root'));
console.info('----------重新装载组件时----------')
ReactDOM.render(<App />, document.getElementById('root'));
console.info('----------重新渲染组件时----------')
ReactDOM.render(<App p="1"/>, document.getElementById('root'));
