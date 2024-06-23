import '../index.css'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleUserCollapse, setUserName } from '../store/connectedUserSlice.jsx'

export default function UserProfile() {

const connectedUser = useSelector((state) => state.connectedUser.value);
let userName = connectedUser.userName
const dispatch = useDispatch()

const cancelFunction = function (event) {
    event.preventDefault()
    event.stopPropagation()
    dispatch(toggleUserCollapse())
}

const saveFunction = function (event) {
    event.preventDefault()
    event.stopPropagation()
    dispatch(setUserName(userName))
    dispatch(toggleUserCollapse())
}

return (
    <>
    <h1>Edit user info</h1>
    <form className="user-name-edit-form">
        <label className="user-name-edit-form-label" htmlFor="userNameInput">User Name:</label>
        <input className="user-name-edit-form-input" id="userNameInput" defaultValue={connectedUser.userName} onChange={(event) => {userName=event.target.value}}></input>
        <label className="user-name-edit-form-label" htmlFor="firstNameInput">First Name:</label>
        <input className="user-name-edit-form-input" id="firstNameInput" value={connectedUser.firstName} readOnly disabled></input>
        <label className="user-name-edit-form-label" htmlFor="lastNameInput">Last Name:</label>
        <input className="user-name-edit-form-input" id="lastNameInput" value={connectedUser.lastName} readOnly disabled></input>
        <button className="form-button" onClick={saveFunction}>Save</button>
        <button className="form-button" onClick={cancelFunction}>Cancel</button>
    </form>
    </>)
}
