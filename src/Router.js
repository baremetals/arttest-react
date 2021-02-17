import React from 'react'
import { Switch, Route } from "react-router-dom";
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import Home from "pages/Home";
import Contests from './pages/Contests';
import Arttest from 'pages/Arttest'
import ProfilePage from 'pages/ProfilePage'


function Router() {
    return (
        <>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contests">
                    <Contests />
                </Route>
                <Route exact path="/arttest">
                    <Arttest />
                </Route>
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
            <Footer></Footer>
        </>
    )
}

export default Router
