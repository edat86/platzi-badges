import React from 'react';

class BadgeForm extends React.Component {
    state = {}
    /* handleChange = e => {
        //console.log({ name: e.target.name, value: e.target.value });
        this.setState({ 
            [e.target.name]:e.target.value 
        })
    }; */

    handleClick = e => {
        console.log("button on click");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("button on submit");
    };

    render() {
        return (
            <div>
                <h1>New Attendat</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="firstName" value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="lastName" value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} type="email" className="form-control" name="email" value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle" value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="twitter" value={this.props.formValues.twitter}></input>
                    </div>

                    <div className="form-group">
                        <br />
                        <button onClick={this.handleClick} className="btn btn-primary" type="button">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;