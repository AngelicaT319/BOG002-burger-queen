import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cocina from "../componentes/Cocina/Cocina";
import { Inicio } from "../componentes/Inicio/Inicio";
import Mesero from "../componentes/Mesero/Mesero";
import NotFound from "../componentes/NotFount/NotFound";


export default function AppRouter(){
    return(
        <Router>
            <Switch>            
            <Route exact path="/inicio" component={Inicio}/>             
            <Route path="/mesero" component={Mesero}/>
            <Route path="/cocina" component={Cocina}/>
            <Route path="*" component={NotFound}/>      
            </Switch>
        </Router> 
    )
}