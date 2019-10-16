import gql from 'graphql-tag';

const POKEMONS = gql`
    query pokemons($q: String, $after: ID, $limit: Int){
        pokemons(q: $q, after: $after, limit: $limit){
            pageInfo {
                endCursor,
                hasNextPage
            },
            edges {
                cursor,
                node {
                    id,
                    name,
                    types
                }
            }
        }
    }
`;

const POKEMONS_BY_TYPE = gql`
    query pokemonsByType($type: String!){
        pokemons: pokemonsByType(type: $type) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    name
                    types
                }
            }
        }
    }
`;

export {
    POKEMONS,
    POKEMONS_BY_TYPE
}