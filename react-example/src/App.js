import React from 'react';
import { createGlobalStyle } from 'styled-components';
import RouteIndex from "./route";

const GlobalStyle = createGlobalStyle`
  body {
     background: #e9ecef;
  }
`;

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <RouteIndex />
        </div>
    );
};

export default App;
