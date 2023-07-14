import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header";
import { BackgroundImagePage } from "./componentes/ImagenFondo";




export const App = () =>{
    return(
        <div>
            <Header />
            <BackgroundImagePage />
        </div>
    )
}