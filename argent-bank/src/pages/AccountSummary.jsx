import { StrictMode } from 'react'

import '../index.css'

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Error_404 from "./Error_404.jsx"
import AccountBalance from "../components/AccountBalance.jsx"
import UserProfile from '../components/UserProfile.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { toggleUserCollapse } from '../store/connectedUserSlice.jsx'


export default function AccountSummary() {
  const accounts = useSelector((state) => state.accounts.value)
  const renderMe = accounts.map ((object, idx) => <AccountBalance id={idx} key={object.title}/>)
  const userProfile = useSelector((state) => state.connectedUser.value)
  const userName = userProfile.userName
  const isUserCollapseOpen = userProfile.isCollapseOpen;
  const dispatch = useDispatch()

  const toggleCollapse = function(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleUserCollapse())
  }
  return (
    <>
    <Header />
    <main className="main bg-dark">
      <StrictMode>
      <div className="user-name-form-header">
        {isUserCollapseOpen?
          <UserProfile />
          :
          <h1>Welcome back<br />{userName}!</h1>
        }
        {isUserCollapseOpen?null:
          <button className="form-button" onClick={toggleCollapse}>Edit Name</button>
        }
      </div>
      </StrictMode>
      <h2 className="sr-only">Accounts</h2>
      {renderMe}
    </main>
    <Footer />
    </>
)
}