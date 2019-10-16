import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultTable from "../ResultTable/ResultTable";

class SearchPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            inputVal: "",
            after: null,
            limit: 15,
            search: false,
            byType: false
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(searchData){
        this.setState((state, props) => {
            return {
                // after: searchData.after,

                limit: searchData.limit,
                inputVal: searchData.inputVal,
                byType: searchData.byType,
                search: true
            };
        })
    }

    render() {
        return <React.Fragment>
            <SearchForm onSearch={this.onSearch} />
            <br />
            <ResultTable
                inputVal={this.state.inputVal}
                after={this.state.after}
                limit={this.state.limit}
                search={this.state.search}
                byType={this.state.byType}
            />
        </React.Fragment>
    }

}

export default SearchPage;