import ApolloClient from 'apollo-boost';

const PORT = 4000;
const HOST = window.location.hostname;

const CLIENT = new ApolloClient({
    uri: "http://" + HOST + ":" + PORT + "/"
});

export {
    CLIENT
}