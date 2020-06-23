import React from "react";
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Principal from '../componentes/Principal';
import PageNotFoud from "../componentes/PageNotFoud";


export default (props) => (
    <BrowserRouter>
            <Switch>
                
                <Route exact={true} path="/" component={Principal}/>
                <Route path="*" component={PageNotFoud} />

                
            </Switch>
       
    </BrowserRouter>
);