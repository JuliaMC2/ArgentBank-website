import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setNote } from '../store/accountsSlice.jsx'

export default function NoteTextField(props) {
const accountId = props.accountId
const transactionId = props.transactionId
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === accountId)
const transactions = account[0].transactions;
const transaction = transactions.filter((_, idx) => idx === transactionId)
const note=transaction[0].note
const dispatch=useDispatch()
const onEnterPressed = function (event) {
    if (event.key ==='Enter')
        dispatch(setNote(accountId+"_"+transactionId+"_"+event.target.value))
    };

return (
    <>
        <input className="transactions-wrapper-content-details-edit"
                    defaultValue = {note}
                    onKeyDown={onEnterPressed}
                    onChange={onEnterPressed}
                    >
        </input>
    </>
)
}
