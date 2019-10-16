import React from "react";
import {Form, Input, Button, Radio} from 'antd';

class SearchForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            inputVal: "",
            byType: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.props.onSearch != null){
            this.props.onSearch(this.state);
        }
    }

    handleInput(e){
        let inputVal = e.target.value;

        this.setState((state, props) => {
            return { inputVal }
        });
    }

    handleChangeType(e){
        let byType = e.target.value;

        this.setState((state, props) => {
            return { byType }
        });
    }

    render() {
        const { inputVal } = this.state;
        return <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
                <Radio.Group onChange={this.handleChangeType} value={this.state.byType}>
                    <Radio value={false} defaultChecked={true}>Name</Radio>
                    <Radio value={true} defaultChecked={false}>Type</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                <Input type="text"
                       value={inputVal}
                       onChange={this.handleInput}
                       placeholder={ this.state.byType ? "Insert pokemon type" : "Insert pokemon name" }
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" icon="search">
                    Search
                </Button>
            </Form.Item>
        </Form>
    }
}

export default SearchForm;