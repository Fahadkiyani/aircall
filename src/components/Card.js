import React from 'react';
import './Card.css';

import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
        } else if (props.callType === 'missed') {
            return (
                <div>
                    <h3 className="to">
                        tried to call on {props.to}
                    </h3>
                </div>
            )

        } else {
            return (
                <div>
                    <h3 className="to">
                        called {props.to}
                    </h3>
                </div>
            )
        }
    }

    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }



    const Time = () => {
        let reg = /T/;
        let time = props.time;
        time.toString();
        let result = reg.exec(time);
        let stringIs = time.slice(result.index + 1, result.index + 6);
        let convertTo12H = tConvert(stringIs);
        return (
            <h3 className="actual_time">
                {convertTo12H}
            </h3>
        )
    }

    const Date = ()=>{
        let reg = /T/;
        let time = props.time;
        time.toString();
        let result = reg.exec(time);
        let stringIs = time.slice(0,result.index);
        let convertTo12H = tConvert(stringIs);
        return (
            <h3 className="date_text">
                {convertTo12H}
            </h3>
        )

    }

    return (
        <>
            <div className="date">
        <Date />
            </div>
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
                    <CalledTo />
                </div>
                <MoreVertIcon style={{ color: 'grey', fontSize: 14, marginTop: 8 }} />
                <div className="time_container">
                    <Time />
                </div>


            </div>
        </>
    )
}
