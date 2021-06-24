import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e =>{
        console.log({ name: e.target.name, value: e.target.value });
    };

    handleClick = e =>{
        console.log("button on click");
    };

    handleClick = e =>{
        console.log("button on submit");
        e.preventDefault();
    };

    render(){
        return (
            <div>
                <h1>New Attendat</h1>
                <form>
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
                        <button onClick={this.handleClick} className="btn btn-primary" type="submit">typeSubmit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;