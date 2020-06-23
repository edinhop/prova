import React, { Component } from 'react';
import '../css/conteudo.css';

class Conteudo extends Component {
    render() {
        return (
            <>
                <div className="container-conteudo">
                    <img class="d-block w-100" src="https://s2.glbimg.com/oh-cQsZBHoGkCKCK3DKNQpGae40=/695x0/s.glbimg.com/po/tt2/f/original/2016/04/08/powerpoint.jpg" alt="" />
                </div>
                <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#/">Pacote Office</a>
                         </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Powerpoint</h5>
                    <p class="card-text">Microsoft PowerPoint é um programa utilizado para criação/edição e exibição de apresentações gráficas,
                                        originalmente escrito para o sistema operacional Windows e portado para a plataforma Mac OS X.
                                        A versão para Windows também funciona no Linux através da camada de compatibilidade Wine.<br></br><br></br>
                                        <h5>Interaja naturalmente usando voz, toque e tinta</h5>
                                        Aplique tinta facilmente em um slide, converta anotações manuscritas em texto e aperfeiçoe as formas desenhadas à mão em segundos.<br></br><br></br>
                                        <h5>Acerte em cheio em sua próxima apresentação</h5>
                                        Com o Orientador de Apresentações, pratique seu discurso e obtenha recomendações sobre ritmo,
                                        escolha de palavras e muito mais por meio do poder da IA.<br></br><br></br>
                                        <h5>Continue na mesma página</h5>
                                        Saiba sempre onde você está no processo de edição. Com o recurso Enquanto você estava fora, acompanhe as alterações recentes feitas por outras pessoas em suas apresentações.
                    </p>
                </div>
                </div>
                

            </>
        );
    }
}

export default Conteudo;