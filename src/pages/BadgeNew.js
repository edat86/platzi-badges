import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component {
    //inicializar estado
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }
    // este handleChange le va a pertenecer a badgNew en vez de badgeForm
    // se lo envia como props al form
    handleChange = e => {
        // por cada cambio detectado actualizamos o agregamos a la propiedad que se produjo el cambio
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-6">
                                <Badge
                                    firstName={this.state.form.firstName}
                                    lastName={this.state.form.lastName}
                                    avatarUrl="http://1.gravatar.com/avatar/3193d0e6c6859d752a3cf338eba913da"
                                    jobTitle={this.state.form.jobTitle}
                                    email={this.state.form.email}
                                    twitterAccount={this.state.form.twitter} />
                            </div>
                            <div className="col-sm-6">
                                <BadgeForm
                                    onChange={this.handleChange}
                                    formValues={this.state.form}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;