import React from 'react';
import { Switch, Route, BrowserRouter }from 'react-router-dom';
import Repositories from './Pages/Repositories/index';
import Home from './Pages/Home/index';

function routes(){
    return(
        <BrowserRouter>
        <switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/Repositories' component={Repositories}/>
        </switch>
    </BrowserRouter>
    )
}

export default routes;