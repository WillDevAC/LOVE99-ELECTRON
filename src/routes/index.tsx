import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * 
 * @importacoes_de_telas
 * #versão base >> 0.0.1
 */
import Home from '../pages/home/index';
const RouterIndex: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
        </BrowserRouter>
    );
}
export default RouterIndex;