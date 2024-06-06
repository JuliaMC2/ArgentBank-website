import '../index.css'
import { useSelector } from 'react-redux'
import TransactionDetails from './TransactionDetails.jsx'
import TransactionDetailsCollapse from './TransactionDetailsCollapse.jsx'

export default function Transactions(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.id)
const transactions = account[0].transactions;
const renderMe = transactions.map((object, idx) => 
    <div className="transactions-wrapper-content" key={idx}>
        <div className="transactions-wrapper-content-date">{object.date}</div>
        <div className="transactions-wrapper-content-description">{object.description}</div>
        <div className="transactions-wrapper-content-amount">${object.amount}</div>
        <div className="transactions-wrapper-content-balance">${object.balance}</div>
        <TransactionDetailsCollapse accountId={props.id} transactionId={idx} />
        <TransactionDetails accountId={props.id} transactionId={idx}/>
    </div>)

const isCollapseOpen = account[0].isCollapseOpen;
return (
    <>
    {isCollapseOpen ?
        <div className="transactions-wrapper">
            <div className="transactions-wrapper-header">
                <div className="transactions-wrapper-header-date">Date</div>
                <div className="transactions-wrapper-header-description">Description</div>
                <div className="transactions-wrapper-header-amount">Amount</div>
                <div className="transactions-wrapper-header-balance">Balance</div>
                <div className="transactions-wrapper-header-collapse"></div>
            </div>
                {renderMe}
            </div>
        :
        null}
    </>
)
}
