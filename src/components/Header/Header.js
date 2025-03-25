import React, { Component } from 'react';


class Header extends Component {
    
    componentDidMount() {
        console.log('La aplicación se ha cargado correctamente.');
    }
    
    render() {
        return (
            <header className="header">
                <h1>Biblioteca Musical</h1>
            </header>
        );
    }
}

export default Header;