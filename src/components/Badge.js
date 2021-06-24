import React from 'react';

import "./styles/Badge.css";
import conflogo from '../images/badge-header.svg';


class Badge extends React.Component{
    render () {
        const {firstName, lastName, avatarUrl, jobTitle, twitterAccount} = this.props
        // es igual que poner {this.props.firstName}
        return (
           <div className="Badge">
                <div className="Badge__header">
                    <img src={conflogo} alt="Logo de la conferencia"/>
                </div>
               
                <div className="Badge__section-name">
                    <img className="Badge__avatar" 
                        src={avatarUrl}
                        alt="Avatar"/>
                    <h1>{firstName} <br/>{lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{jobTitle}</p>
                    <p>@{twitterAccount}</p>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
           </div>
        )
    }
}

export default Badge;