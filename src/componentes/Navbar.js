import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#/">Prova04</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#/">Início<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/">Quem Somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/">Preços</a>
                        </li>
      
                    </ul>
                </div>
            </nav>
        );
    }
}


export default Navbar;