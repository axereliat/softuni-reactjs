import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/common/Header'
import RegisterPage from './components/Auth/RegisterPage'
import LoginPage from './components/Auth/LoginPage'
import HomePage from './components/HomePage/HomePage'
import { isAuthed } from './utils/auth'

class App extends Component {
  constructor (props) {
    super(props)

    this.onLogout = this.onLogout.bind(this)
  }

  onLogout () {
    localStorage.clear()
    this.props.history.push('/')
  }

  render () {

    console.log('isAuthed: ', isAuthed())

    console.log('---')

    return (
      <div className="App">
        <Header loggedIn={isAuthed()} onLogout={this.onLogout}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)