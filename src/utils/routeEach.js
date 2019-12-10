import React from "react";
import { Route, Redirect, Switch } from "react-router-dom"
import Cookies from "js-cookie";


export default (routes) => {
    function isLogin(item) {
      
        if (item.path !== "/login" && item.meta.requiredAuth) {
           
            if (Cookies.get("token")) {
                return <item.component />
            } else {
                return <Redirect to="/login" />
            }
        } else {
            return <item.component />
        }
    }


    function childrenMap(childNodes) {
        return (
            <Route path={childNodes.path} key={childNodes.key} render={() => {
                return (
                    <Switch>
                        {
                            childNodes.children.map((child) => (
                                <Route path={child.path} key={child.key} render={() => {
                                    if (child.children) {
                                        return childrenMap(child);
                                    } else {
                                        return isLogin(child);
                                    }
                                }} />
                            ))
                        }
                        <Redirect to={childNodes.children[0].path} exact />
                    </Switch>
                )
            }} />
        )
    }


    return routes.map((item) => {
        if (item.children) {
            return childrenMap(item);
        } else {
           return (
                <Route path={item.path} key={item.key} render={() => {
                
                    return isLogin(item);
                }} />
           )
        }
    })
}