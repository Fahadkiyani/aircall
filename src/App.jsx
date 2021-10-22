import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';

import Header from './Header.jsx';

const App = () => {
  const [feeds, setFeeds] = useState([]);

  const fetchFeeds = async () => {
    let data = await fetch('https://aircall-job.herokuapp.com/activities');
    console.log('read data: ',data);
  }

  useEffect(()=>{
    fetchFeeds();
    // console.log(feeds);
  });


  return (
    <div className='container'>
      <Header heading="Activity" />
      <div style={{ backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, }}>
        <Card name="fahad" time="12:20pm" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
