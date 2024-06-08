import '../index.css'
import { useSelector, useDispatch} from 'react-redux'
import { editCategory, editNote } from '../store/accountsSlice.jsx'
import CategoryDropdown from './CategoryDropdown.jsx'
import NoteTextField from './NoteTextField.jsx'

export default function TransactionDetails(props) {
const dispatch = useDispatch();
const accountId = props.accountId
const transactionId = props.transactionId
const accounts = useSelector((state) => state.accounts.value)
const account = accounts.filter((_, idx) => idx === accountId)
const transactions = account[0].transactions;
const transaction = transactions.filter((_, idx) => idx === transactionId)
const isCollapseOpen = transaction[0].isCollapseOpen;
const isCategoryBeingEdited = transaction[0].isCategoryBeingEdited;
const isNoteBeingEdited = transaction[0].isNoteBeingEdited;


const onCategoryClickFunction = function(event) {
    event.stopPropagation();
    dispatch(editCategory(accountId+"_"+transactionId))
    }

const onNoteClickFunction = function(event) {
    event.stopPropagation();
    dispatch(editNote(accountId+"_"+transactionId))
    }
    
    return (
    <>
    {isCollapseOpen ?
        <div className="transactions-wrapper-content-details">
            <div className="transactions-wrapper-content-details-header">Transaction type</div>
            <div className="transactions-wrapper-content-details-value">
                {transaction[0].type}
            </div>
            <div className="transactions-wrapper-content-details-header">Category</div>
            <div className="transactions-wrapper-content-details-value">
                {isCategoryBeingEdited ?
                    <CategoryDropdown accountId={accountId} transactionId={transactionId} />
                    :
                    transaction[0].category
                }
                {isCategoryBeingEdited ?
                    null
                    :
                    <div className="transactions-wrapper-content-details-edit fa fa-pencil"
                                  onClick={onCategoryClickFunction}></div>
                }
            </div>
            <div className="transactions-wrapper-content-details-header">Note</div>
            <div className="transactions-wrapper-content-details-value">
                {isNoteBeingEdited ?
                    <NoteTextField accountId={accountId} transactionId={transactionId} />
                    :
                    transaction[0].note
                }
                {isNoteBeingEdited ?
                    null
                    :
                    <div className="transactions-wrapper-content-details-edit fa fa-pencil"
                              onClick={onNoteClickFunction}></div>
                }
            </div>
        </div>
        :
        null
    }
    </>
)
}
