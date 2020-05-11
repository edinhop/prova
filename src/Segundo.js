import React, {Component} from 'react';
import Terceiro from './Terceiro';
class Segundo extends Component{
    render(){
        return(
            <div className="Segundo">
                
                <h2>Segundo Componente</h2>
                <Terceiro />
            </div>
        );
    }
} export default Segundo;