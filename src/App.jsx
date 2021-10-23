import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';
import axios from 'axios';
import Header from './Header.jsx';

const App = () => {
  const [Feeds, setFeeds] = useState([]);


  useEffect( async() => {
    let data = await fetchFeeds();
    console.log('Feeds: ',data);
    setFeeds(data);
    test(data)
  }, []);

  const fetchFeeds = async () => {
    let data = await axios('https://aircall-job.herokuapp.com/activities');
    // console.log('Data: ', data.data);
    return data.data;
  }

  // function tConvert (time) {
  //   // Check correct time format and split into components
  //   time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
  //   if (time.length > 1) { // If time format correct
  //     time = time.slice (1);  // Remove full string match value
  //     time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
  //     time[0] = +time[0] % 12 || 12; // Adjust hours
  //   }
  //   return time.join (''); // return adjusted time or original string
  // }
  


  // const test = (d)=>{
  //   let reg = /T/;
  //   let time = d[2].created_at;
  //   time.toString();
  //   let result = reg.exec(time);
  //   let stringIs = time.slice(result.index +1 ,result.index +6);
  //   console.log(stringIs);
  //   let convertTo12H = tConvert (stringIs);
  //   console.log(convertTo12H);
  // }
  return (
    <div className='container'>
      <Header heading="Activity" />
      <div className="CallLogsContainer" style={{backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, paddingRight:20}}>
        {/* <Card name="fahad" time="12:20pm" /> */}
        {Feeds.map(data => {
          return (
            <Card key={data.id} from={data.from} to={data.to} id={data.id} time={data.created_at} duration={data.duration}  callType={data.call_type} />
          )
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
