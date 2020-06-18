import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { users } from 'reducers/users'
import { Login } from './components/Login'
import { Registration } from './components/Registration'
import { StartPage } from './components/StartPage'
import { UserPage } from './components/UserPage'

const reducer = combineReducers({
  users: users.reducer
})

const store = configureStore( { reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact>
          <StartPage />
        </Route>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/userpage" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}