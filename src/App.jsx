import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';
import axios from 'axios';
import Header from './Header.jsx';
import LabelBottomNavigation from './components/bottomNavigator/BottomNavigator';
import HeaderSubParts from './components/HeaderSubParts/HeaderSubParts'
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';

import './css/app.css'

const App = () => {
  const [Feeds, setFeeds] = useState([]);
  useEffect(async () => {
    let data = await fetchFeeds();
    console.log('Feeds: ', data);
    setFeeds(data);

  }, []);

  const fetchFeeds = async () => {
    let data = await axios('https://aircall-job.herokuapp.com/activities');
    // console.log('Data: ', data.data);
    return data.data;
  }

  let counter = -1;

  return (
    <div className='container'>
      <Header heading="Activity" />
      {/* call logs container */}
      <div className="CallLogsContainer" style={{ backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, paddingRight: 20 }}>
        <div className='archive_all_calls_container' onClick={() => { alert('are you sure') }}>
          <ArchiveTwoToneIcon />
          <h1 className="archive_all_calls_text">
            Archive all calls
          </h1>
        </div>
        {/* <HeaderSubParts /> */}
        {Feeds.map((data, i, length) => {
          if (data.is_archived === false) {
            counter = counter + 2;
          } else if (i + 1 === length && counter < 0) {
            counter = 0;
          }
          return (
            <Card key={data.id} isArchived={data.is_archived} from={data.from} to={data.to} id={data.id} time={data.created_at} duration={data.duration} callType={data.call_type} />
          )
        })}
        <div>
          {counter === 0 ? <div style={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alightItems: 'flex-end' }}>No active feeds to show</div> : <></>}
        </div>
      </div>
      <div className="bottom_navigation_container">
        <LabelBottomNavigation />
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
