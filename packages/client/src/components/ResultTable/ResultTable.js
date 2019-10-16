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
            limit: props.limit,
            type: props.inputVal
        },
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;
    if(!props.search) return <p>Gotta Catch 'Em All</p>;

    let onLoadMore = () => {
        fetchMore({
            query: query,
            variables: {
                q: props.inputVal,
                type: props.inputVal,
                after: data.pokemons.pageInfo.endCursor,
                limit: props.limit
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