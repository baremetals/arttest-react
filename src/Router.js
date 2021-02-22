import React from 'react'
import { Switch, Route } from "react-router-dom";
import AuthRoute from './auth/AuthRoute'
import Header from 'components/templates/Header'
import Menu from 'components/templates/Menu'
import Connected from 'components/templates/ConnectedMenu'
import Footer from 'components/templates/Footer'
import Home from "pages/Home";
import Contests from './pages/ContestsPage';
import ContestDetails from './pages/ContestDetails';
import Arttest from 'pages/Arttest'
import Explore from 'pages/ExplorePage'
import BlogDetails from 'pages/BlogDetails'
import Blogs from 'pages/BlogsPage'
import EventDetails from 'pages/EventDetails'
import Events from 'pages/EventsPage'
import ProfilePage from 'pages/ProfilePage'
import SignUp from 'auth/SignUp';
import SignIn from 'auth/SignIn';
import ResetPassword from 'auth/ResetPassword';




function Router() {
    return (
        <>
            <Connected></Connected>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/arttest" component={Arttest}/>
                <Route path="/explore" component={Explore}/>

               
                <AuthRoute exact path="/signup" component={SignUp} />                 
                <AuthRoute exact path="/signin" component={SignIn}/>
                <Route path="/reset-password" component={ResetPassword} />

                <Route path="/profile/:username" component={ProfilePage} />

                <Route path="/contests" component={Contests} /> 
                <Route path="/contests/:contestId" component={ContestDetails} />
                <Route path="/events" component={Events}/>
                <Route path="/events/:eventId" component={EventDetails}/>
                <Route path="/blogs" component={Blogs}/>
                <Route path="/blogs/:blogId" component={BlogDetails}/>                
                
                
                
                 
            </Switch>
            <Footer></Footer>
        </>
    )
}

export default Router
