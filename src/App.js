import React, { Component } from 'react'
import {Switch,Redirect} from "react-router-dom";
import routeEach from "utils/routeEach"
import {LayoutRoutes} from "router"
import Layout from "layout"
class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
            <Redirect from="/" to="/dashboard/analyze" exact/>
            {
              routeEach(LayoutRoutes)
            }
          </Layout>
      </Switch>
    )
  }
}

export default App
