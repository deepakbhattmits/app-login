import React, { Component } from 'react'

import TextField from "../Reusable/TextField"
import Button from "../Reusable/Button"
import List from "../Reusable/List"
const initialState = {
    fields: {},
    errorMessages: {}
};
class Form extends Component {
    state = initialState;
    handleChange = e => {
        let fields = this.state.fields;
        const { name, value } = e.target;
        fields[name] = value;
        this.setState(
            {
                fields
            },
            () => this.validateForm()
        );
    };
    handleSubmit = e => {
        e.preventDefault();
        let fields = this.state.fields;
        if (this.validateForm()) {
            this.props.userLogin(fields);
            fields["username"] = "";
            fields["password"] = "";
            this.setState({ fields });
        }
    };
    validateForm = () => {
        let fields = this.state.fields;
        let errorMessages = {};
        let formIsValid = true;
        if (!fields["firstName"]) {
            formIsValid = false;
            errorMessages["firstName"] = "Please enter first Name";
        }


        if (!fields["lastName"]) {
            formIsValid = false;
            errorMessages["lastName"] = "Please enter Lastname";
        }

        if (!fields["profession"]) {
            formIsValid = false;
            errorMessages["profession"] = "Please enter Profession";
        }
        this.setState({ errorMessages: errorMessages });
        return formIsValid;
    };
    render() {
        return (
            <form
                className={`ui form ${this.state.errorMessages ? "error" : ""}`}
                onSubmit={this.handleSubmit}
            >
                <div
                    className={`field ${
                        this.state.errorMessages.firstName ? "error" : ""
                        }`}
                >
                    <div className="ui left icon input">
                        <i className="user icon" />
                        <TextField
                            type="text"
                            name="firstName"
                            value={this.state.fields.firstName || ""}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div
                    className={`field ${
                        this.state.errorMessages.lastName ? "error" : ""
                        }`}
                >
                    <div className="ui left icon input">
                        <i className="lock icon" />
                        <TextField
                            type="text"
                            name="lastName"
                            value={this.state.fields.lastName || ""}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div
                    className={`field ${
                        this.state.errorMessages.profession ? "error" : ""
                        }`}
                >
                    <div className="ui left icon input">
                        <i className="lock icon" />
                        <TextField
                            type="text"
                            name="profession"
                            value={this.state.fields.profession || ""}
                            placeholder="Profession"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <Button className="ui fluid large teal submit button">
                    <i className='icon save' />save
        </Button>
                {this.state.errorMessages ? (
                    <div className="ui error message">
                        <List error={this.state.errorMessages} />
                    </div>
                ) : null}
            </form>
        )
    }
}
export default Form
