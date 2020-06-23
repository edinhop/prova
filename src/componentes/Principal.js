import React, { Component } from 'react';
import Navbar from './Navbar';
import FooterPage from './Footer';
import Conteudo from './Conteudo';



class Principal extends Component {
    render(){
        return(
            <>
                <Navbar />
                <Conteudo />
                <FooterPage />
                
            </>
        );
    }
}

export default Principal