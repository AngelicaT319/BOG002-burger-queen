import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Cocina from "../componentes/Cocina/Cocina";
import { Inicio } from "../componentes/Inicio/Inicio";
import Mesero from "../componentes/Mesero/Mesero";
import NotFound from "../componentes/NotFount/NotFound";
=======
import Cocina from "../views/Cocina";
import Home from "../views/Home"
import Mesero from "../views/Mesero";
import NotFound from "../views/NotFound";

>>>>>>> be2d87722428ed1fab9d54a4d88a97b6c580d528


export default function AppRouter(){
    return(
        <Router>
           
            <Switch>            
            <Route exact path="/Home" component={Home}/>             
            <Route path="/mesero" component={Mesero}/>
            <Route path="/cocina" component={Cocina}/>
            <Route path="*" component={NotFound}/>      
            </Switch>
        </Router> 
    )
}