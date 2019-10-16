import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {POKEMONS, POKEMONS_BY_TYPE} from "../../queries/Pokemons";
import PokemonsList from "../PokemonsList/PokemonsList";

function ResultTable(props) {
    let query = props.byType === true ? POKEMONS_BY_TYPE : POKEMONS;

    const { loading, error, data , fetchMore } = useQuery(query, {
        skip: !props.search,
        variables: {
            q: props.inputVal,
            after: null,
            limit: 15,
            type: props.inputVal
        },
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;
    if(!props.search) return <p>Gotta Catch 'Em All</p>;

    let onLoadMore = () => {
        fetchMore({
            // note this is a different query than the one used in the
            // Query component
            query: query,
            variables: {
                q: props.inputVal,
                type: props.inputVal,
                after: data.pokemons.pageInfo.endCursor,
                limit: 15
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const prevData = previousResult.pokemons.edges;
                const newData = fetchMoreResult.pokemons.edges;

                return {
                    pokemons: {
                        edges: [...prevData, ...newData],
                        pageInfo: fetchMoreResult.pokemons.pageInfo,
                        __typename: previousResult.pokemons.__typename
                    }
                };
            }
        });
    };

    let pokemonsList = data.pokemons.edges;

    return <PokemonsList pokemons={pokemonsList} loadMore={onLoadMore} hasMore={data.pokemons.pageInfo.hasNextPage} />;
}

export default ResultTable;