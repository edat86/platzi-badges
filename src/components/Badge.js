import React from 'react';

import "./styles/Badge.css";
import conflogo from '../images/badge-header.svg';


class Badge extends React.Component{
    render () {
        return (
           <div className="Badge">
                <div className="Badge__header">
                    <img src={conflogo} alt="Logo de la conferencia"></img>
                </div>
               
                <div className="Badge__section-name">
                    <img className="Badge__avatar" 
                        src="http://1.gravatar.com/avatar/3193d0e6c6859d752a3cf338eba913da" 
                        alt="Avatar"></img>
                    <h1>Daniel <br/> Alvarado T.</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Fronted Engineer</p>
                    <p>@dalvarado</p>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
           </div>
        )
    }
}

export default Badge;