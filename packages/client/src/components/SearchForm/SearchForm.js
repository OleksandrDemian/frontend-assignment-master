import React from "react";
import {Form, Input, Button, Radio, Select} from 'antd';

class SearchForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            inputVal: "",
            byType: false,
            limit: 15
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleLimit = this.handleLimit.bind(this);
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

    handleLimit(value){
        this.setState((state, props) => {
            return { limit: value }
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
                <Select onChange={this.handleLimit} defaultValue={10} value={this.state.limit}>
                    <Select.Option value={5}>5</Select.Option>
                    <Select.Option value={10}>10</Select.Option>
                    <Select.Option value={15}>15</Select.Option>
                    <Select.Option value={30}>30</Select.Option>
                </Select>
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