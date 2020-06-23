import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import FooterPage from './Footer';



class PageNotFoud extends Component {
    render() {
        return(
            <>
                <Navbar />
                <div className="container-notfoud">
                    <img class="d-block w-100" src="https://image.freepik.com/vetores-gratis/erro-404-pagina-nao-encontrada-homem-varrendo-o-chao_82574-10307.jpg" alt="" />
                </div>
                <FooterPage />
            </>
        );
    }
}
export default PageNotFoud;