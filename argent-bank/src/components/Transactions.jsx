import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTransactionCollapse } from '../store/accountsSlice.jsx'

export default function Transactions(props) {
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_,idx) => idx === props.id)
const transactions = account[0].transactions;
const isCollapseOpen = account[0].isCollapseOpen;
return (
    <>
    {!isCollapseOpen ? <div>test transactions</div> : null}
    </>
)
}
