import '../index.css'

import {Link} from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../store/tokenSlice'

import logo from '/assets/img/argentBankLogo.png'

export default function Header() {
    const isConnected = useSelector((state) => state.token.value).status;
    const userName = useSelector((state) => state.connectedUser.value).userName
    const dispatch = useDispatch()
    return (
    <>
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected !== 'ok' ?
        <Link to="/login" className="main-nav-item" >
            <i className="fa fa-user-circle"></i>
            Sign In
        </Link> : 
        <Link to="/" className="main-nav-item" onClick={() => dispatch(reset())}>
            <span className="header-user-name">{userName}</span>
            <i className="fa fa-user-circle"></i>
            Sign Out
        </Link>
        }
      </div>
    </nav>
    </>
    )
}