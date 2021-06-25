import * as React from 'react'
import '../Components/Css/Card.css'

export default function Card(props) {
    return(
        <>
        <div className="Card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        </>
    )
}