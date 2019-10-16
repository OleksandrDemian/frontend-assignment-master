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
            <h3>Pokemon</h3>
            <p>You're my best friend in a world we must defend</p>
            <SearchPage />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
