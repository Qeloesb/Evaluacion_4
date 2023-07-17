import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from "./screen/Home";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { RutinaEjercicios } from "./screen/RutinasEjercicios";
import { PlanesEntrenamiento } from "./screen/PlanesEntrenamiento";
import { MisRutinas } from "./screen/MisRutinas";
import { NavBar } from "./componentes/Navbar";
import { Footer } from "./componentes/Footer";




export const App = () =>{
    return(
        <div className="bg-dark">
            <Router>
            <div >
                <NavBar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/Home' exact component={Home}/>
                    <Route path='/RutinasEjercicios' exact component={RutinaEjercicios}/>
                    <Route path='/PlanesEntrenamiento' exact component={PlanesEntrenamiento}/>
                    <Route path='/MisRutinas' exact component={MisRutinas}/>
                </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
       
    );
}