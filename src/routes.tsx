import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import About from './pages/About/IndexAbout'
import Home from './pages/Home/IndexHome'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
