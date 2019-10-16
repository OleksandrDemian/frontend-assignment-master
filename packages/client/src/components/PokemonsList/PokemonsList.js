import React from "react";
import {Button, Table} from "antd";

const COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'node.id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'node.name',
        key: 'name',
    },
    {
        title: 'Types',
        dataIndex: 'node.types',
        key: 'types',
        render: (text, record) => {
            return text.toString();
        }
    },
    {
        title: 'Gotta catch',
        key: 'gottaCatch',
        render: (text, record) => {
            return "Yes";
        }
    }
];

function PokemonsList({ pokemons, loadMore, hasMore }) {
    return <React.Fragment>
        <Table columns={COLUMNS} dataSource={pokemons} pagination={false} rowKey={"cursor"} key={"cursor"} />
        { hasMore && <Button type="primary" onClick={loadMore} className="margin-m">
            Load more
        </Button>}
    </React.Fragment>
}

export default PokemonsList;