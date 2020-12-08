import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from '../Components/Page1';
import Page2 from '../Components/Page2';

const routes = () =>
{
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/create">
                        <Page2 />
                    </Route>
                    <Route path="/">
                        <Page1 />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
    
export default routes;
