import React, {Component} from 'react';
import Segundo from './Segundo';
class Primeiro extends Component{
    render(){
        return(
            <div className="Primeiro">
                
                <h1>Primeiro Componente</h1>
                <Segundo />
            </div>
        );
    }
} export default Primeiro;