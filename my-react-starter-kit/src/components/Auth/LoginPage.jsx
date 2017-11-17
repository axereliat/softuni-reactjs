import React, { Component } from 'react'
import Input from '../common/Input'
import { login } from '../../api/remote'
import { saveSession } from '../../utils/auth'

export default class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  async onSubmitHandler (e) {
    e.preventDefault()
    const res = await login(this.state.email, this.state.password)
    if (res.success) {
      saveSession(Object.assign({}, res, {email: this.state.email}))
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            label="E-mail"
          />
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            label="Password"
          />
          <input type="submit" className="btn btn-primary" value="Login"/>
        </form>
      </div>
    )
  }
}