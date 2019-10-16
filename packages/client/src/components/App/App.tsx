import React from 'react';
import './App.css';

import { CLIENT } from "../../ApolloClient";
import { ApolloProvider } from '@apollo/react-hooks';
import SearchPage from "../SearchPage/SearchPage";

function App() {
  return (
    <ApolloProvider client={CLIENT}>
      <div className="App">
        <header className="App-header">
          <SearchPage />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
