import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Daniel"
                                lastName="Alvarado T." 
                                avatarUrl="http://1.gravatar.com/avatar/3193d0e6c6859d752a3cf338eba913da" 
                                jobTitle="Fronted Engineer"
                                twitterAccount="edisson225"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;