import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Styled} from './App.styled';
import Theme from './styleConfigs/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Styled.GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

