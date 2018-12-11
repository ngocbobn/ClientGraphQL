import React, { Component } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import { history } from './redux/store';
import Router from './router';

const cache = new InMemoryCache({
    dataIdFromObject: o => o.id
});

const client = new ApolloClient({
    link: new HttpLink('http://localhost:4044/graphql'),
    cache
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router history={history} />
            </ApolloProvider>
        );
    }
}

export default App;