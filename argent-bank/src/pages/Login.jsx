import '../index.css'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/tokenSlice'

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"


export default function Login() {
  const dispatch = useDispatch()
  const errorString = useSelector((state) => state.token.value.error)
  let email=''
  let password=''
  const tryToLogin = function(event) {
    event.preventDefault()
    event.stopPropagation()
    dispatch(login({email, password}))
  } 
    return (
  <>
  <Header />
  <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">E-mail</label>
          <input type="text" id="username" onChange={(event) => (email=event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(event) => (password=event.target.value)}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorString ? <div className="sign-in-error">{errorString}</div> : null}
        <button className="sign-in-button" onClick={(event) => tryToLogin(event)}>
          Sign In
        </button>

      </form>
    </section>
  </main>
  <Footer />
  </>
)
}