import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../store/accountsSlice.jsx'

export default function CategoryDropdown(props) {
const accountId = props.accountId
const transactionId = props.transactionId
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_, idx) => idx === accountId)
const transactions = account[0].transactions;
const transaction = transactions.filter((_, idx) => idx === transactionId)
const category = transaction[0].category;
const dispatch=useDispatch()
const onChangeCategory = function (event) {
    dispatch(setCategory(accountId+"_"+transactionId+"_"+event.target.value))
    };
    
return (
    <>
        <select className="transaction-content-details-select" onChange={onChangeCategory} value={category}>
            <option className="transaction-content-details-select-option" value="Food" >Food</option>
            <option className="transaction-content-details-select-option" value="Mandatory">Mandatory</option>
            <option className="transaction-content-details-select-option" value="Loan">Loan</option>
            <option className="transaction-content-details-select-option" value="Leisure">Leisure</option>
        </select>
    </>
)
}
