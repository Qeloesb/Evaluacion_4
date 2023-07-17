import React from "react";
import { createRoot, ReactDOM } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

/* Importar APP desde otro archivo */
import {App} from './App'



const container = document.getElementById('root')
const root = createRoot(container); 
root.render(<App />);

