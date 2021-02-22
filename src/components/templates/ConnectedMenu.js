import React from 'react'
import { Fragment } from 'react';
import { useSelector } from "react-redux";
import Header from './Header'
import Menu from './Menu'

function ConnectedMenu() {
    const  authenticated  = useSelector((state) => state.user.authenticated);

    return (
        <Fragment>
        { authenticated ? (  
            <Menu/> 
        ) : (
            <Header />        
        )}
        </Fragment>
    )
}

export default ConnectedMenu
