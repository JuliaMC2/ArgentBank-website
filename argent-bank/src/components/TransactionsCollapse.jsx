import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTransactionsCollapse } from '../store/accountsSlice.jsx'

export default function TransactionsCollapse(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.id)
const isCollapseOpen = account[0].isCollapseOpen;
const dispatch=useDispatch()
const onClickFunction = function(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleTransactionsCollapse(props.id))};
return (
    <>
        <button className="transaction-button" onClick={onClickFunction}>
            {isCollapseOpen ? 'Hide' : 'View'} transactions
        </button>
    </>
)
}
