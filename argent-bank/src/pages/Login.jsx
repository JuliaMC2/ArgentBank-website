import '../index.css'

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set } from '../store/tokenSlice'

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"


export default function Login() {
  const dispatch = useDispatch()

    return (
    <>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Link to="/accounts/123" className="sign-in-button" onClick={() => dispatch(set('testToken'))}>Sign In</Link>

        </form>
      </section>
    </main>
    <Footer />
    </>
)

// <button className="sign-in-button">Sign In</button>

}