import '../index.css'
import { useSelector } from 'react-redux'

export default function TransactionDetails(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.accountId)
const transactions = account[0].transactions;
const transaction = transactions.filter((_, idx) => idx === props.transactionId)
const isCollapseOpen = transaction[0].isCollapseOpen;
return (
    <>
    {isCollapseOpen ?
        <div className="transactions-wrapper-content-details">
            <div className="transactions-wrapper-content-details-header">Transaction type</div>
            <div className="transactions-wrapper-content-details-value">{transaction[0].type}</div>
            <div className="transactions-wrapper-content-details-header">Category</div>
            <div className="transactions-wrapper-content-details-value">{transaction[0].category}</div>
            <div className="transactions-wrapper-content-details-header">Note</div>
            <div className="transactions-wrapper-content-details-value">{transaction[0].note}</div>
        </div>
        :
        null}
    </>
)
}
