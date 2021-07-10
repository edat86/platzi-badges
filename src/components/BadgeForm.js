import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e =>{
        console.log({ name: e.target.name, value: e.target.value });
    };

    handleClick = e =>{
        console.log("button on click");
    };

    handleSubmit = e =>{
        e.preventDefault();
        console.log("button on submit");
    };

    render(){
        return (
            <div>
                <h1>New Attendat</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="firstName"></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="lastName"></input>
                    </div>

                    <div className="form-group">
                        <br/>
                        <button onClick={this.handleClick} className="btn btn-primary" type="button">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;