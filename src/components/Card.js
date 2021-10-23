import React from 'react';
import './Card.css';

import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
// import { VoicemailIcon, PhoneMissedIcon, PhoneCallbackIcon } from '@mui/icons-material/';

export default function Card(props) {


    const CallType = () => {
        if (props.callType === "missed") {
            return (
                <PhoneMissedIcon className="img" />
            )
        } else if (props.callType === "voicemail") {
            return (
                <VoicemailIcon className="img" style={{ color: 'rgba(100 , 100, 200, 1)' }} />
            )
        } else {
            return (
                <PhoneCallbackIcon className="img" style={{ color: 'rgba(100 , 200, 100, 1)' }} />
            )
        }
    }

    const CalledTo = () => {
        if (props.callType === 'voicemail') {
            return (
                <div>
                    <h3 className="to">
                        sent a voicemail.
                    </h3>
                </div>
            )
        }else if (props.callType === 'missed'){
            return (
                <div>
                    <h3 className="to">
                        tried to call on {props.to}
                    </h3>
                </div>
            )

        }else{
            return (
                <div>
                    <h3 className="to">
                        called {props.to}
                    </h3>
                </div>
            )
        }
    }

    const CallTime=()=>{
        
    }

    return (
        <>
            <div className='dottedLine'>
            </div>
            <div className="Card">
                <div className="phone-icon">
                    {/* <PhoneMissedIcon className="img" /> */}
                    <CallType />
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/4293/4293305.png" alt="missed call"/> */}
                </div>
                <div className={"call_info_container"}>
                    <div className="user-name">
                        <h1 style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Ubuntu', color: '#555' }}>
                            {props.from}
                        </h1>
                    </div>
                    {/* called to  */}
                    {/* <div>
                        <h3 className="to">
                            tried to call on {props.to}
                        </h3>
                    </div> */}
                <CalledTo />
                </div>
                <div className="time_container">
                    <h4>

                    </h4>
                </div>


            </div>
        </>
    )
}
