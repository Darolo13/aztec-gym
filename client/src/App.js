// general
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <ApolloProvider>
      <Router>
        <div>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
