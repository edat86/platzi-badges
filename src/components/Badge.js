import React from 'react';
import conflogo from '../images/badge-header.svg';
class Badge extends React.Component{
    render () {
        return (
           <div>
                <div>
                    <img src={conflogo} alt="Logo de la conferencia"></img>
                </div>
               
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1>Daniel <br/> Alvarado T.</h1>
                </div>

                <div>
                    <p>Fronted Engineer</p>
                    <p>@dalvarado</p>
                </div>
                <div>
                    #platziconf
                </div>
           </div>
        )
    }
}

export default Badge;