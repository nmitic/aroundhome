import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Styled} from './App.styled';

ReactDOM.render(
  <React.StrictMode>
    <Styled.GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

