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

  return (
    <div className='container'>
      <Header heading="Activity" />
      {/* call logs container */}
      <div className="CallLogsContainer" style={{ backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, paddingRight: 20 }}>
      
      <div className='archive_all_calls_container' onClick={()=>{alert('are you sure')}}>
      <ArchiveTwoToneIcon />
       <h1 className="archive_all_calls_text">
         Archive all calls
       </h1>
     </div>
      {/* <HeaderSubParts /> */}
        {Feeds.map(data => {
          return (
            <Card key={data.id} from={data.from} to={data.to} id={data.id} time={data.created_at} duration={data.duration} callType={data.call_type} />
          )
        })}
      </div>
      <div className="bottom_navigation_container">
        <LabelBottomNavigation />
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
