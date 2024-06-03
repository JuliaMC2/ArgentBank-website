import '../index.css'

import React from 'react'
import { useSelector } from 'react-redux'

export default function InfoCards() {

const values = useSelector((state) => state.infoCards.value);
const renderMe = values.map (object => 
    <div className="feature-item" key={object.title}>
        <img src={object.src} alt={object.alt} className="feature-icon" />
        <h3 className="feature-item-title">{object.title}</h3>
        <p>{object.text}</p>
    </div>)
return (
    <>
    <h2 className="sr-only">Features</h2>
    {renderMe}
    </>)
}
