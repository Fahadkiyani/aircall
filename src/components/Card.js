import React from 'react'
import './Card.css'
export default function Card(props) {
    return (
        <div className="Card">
            <div className="phone-icon">
                
            </div>
            <div className="user-name">
                {props.name}
            </div>
            <div className="time">
            {props.time}
            </div>

            <div style={{borderTop:'1px dotted grey'}}>

            </div>

        </div>
    )
}
