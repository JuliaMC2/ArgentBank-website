import '../index.css'

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import AccountBalance from "../components/AccountBalance.jsx"

import { useSelector } from 'react-redux'


export default function AccountSummary() {
  const accounts = useSelector((state) => state.accounts.value);
  const renderMe = accounts.map (object =>     <AccountBalance title={object.title} amount={object.amount} description={object.description} key={object.title}/>)

  return (
    <>
    <Header />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {renderMe}
    </main>
    <Footer />
    </>
)
}