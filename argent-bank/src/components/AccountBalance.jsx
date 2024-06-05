import '../index.css'
import { useSelector } from 'react-redux'
import TransactionsCollapse from './TransactionsCollapse.jsx'
import Transactions from './Transactions.jsx'

export default function AccountBalance(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.id)
return (
    <>
    <section className="account" key={account[0].title}>
        <div className="account-content-wrapper">
            <h3 className="account-title">{account[0].title}</h3>
            <p className="account-amount">${account[0].amount}</p>
            <p className="account-amount-description">{account[0].description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <TransactionsCollapse id={props.id} />
        </div>
        <Transactions id={props.id} /> 
    </section>
    </>
)
}