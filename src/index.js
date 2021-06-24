import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//Importar Componente
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstName="Daniel" lastName="Alvarado T." avatarUrl="http://1.gravatar.com/avatar/3193d0e6c6859d752a3cf338eba913da" jobTitle="Fronted Engineer" twitterAccount="edisson225"/>, container)
// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
