import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTransactionCollapse } from '../store/accountsSlice.jsx'
import caretUp from '/assets/img/caret-up.png'
import caretDown from '/assets/img/caret-down.png'


export default function TransactionDetailsCollapse(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.accountId)
const transactions = account[0].transactions
const transaction = transactions.filter((_,idx) => idx === props.transactionId)
const isCollapseOpen = transaction[0].isCollapseOpen;
const accountId = props.accountId
const transactionId = props.transactionId
const dispatch=useDispatch()
return (
    <>
        <div className="transactions-wrapper-content-collapse" onClick={() => dispatch(toggleTransactionCollapse(accountId+"_"+transactionId))}>
            <img className="transactions-wrapper-content-collapse-icon" src={isCollapseOpen ? caretUp : caretDown}></img>
        </div>
    </>
)
}
