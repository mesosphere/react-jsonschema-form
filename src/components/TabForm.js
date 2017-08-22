// expect data like dcos.js, and render tabs for each top=level key, then call Form.js for each value
import React, { Component } from "react";
import PropTypes from "prop-types";

import Form from "./Form";

export default class TabForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: Object.keys(props.data.properties)[0]
        }
        this.data = props.data;
    }

    handleClick(key) {
        this.setState({selectedTab: key});
    }

    render() {
        const tabs = Object.keys(this.data.properties).map((key) => {
            return (
                <div key={key} onClick={this.handleClick.bind(this, key)}>{key}</div>
            );
        });

        return (
            <div className="row">
                <div className="col-sm-3">
                    {tabs}
                </div>
                <div className="col-sm-9">
                    <Form
                    schema={this.data.properties[this.state.selectedTab]}
                    uiSchema={{}}
                    formData={{}}>
                    </Form>
                </div>
            </div>
        )
    }
}

TabForm.propTypes = {
    data: PropTypes.object.isRequired 
};