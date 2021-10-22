import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';
import axios from 'axios';
import Header from './Header.jsx';

const App = () => {
  const [Feeds, setFeeds] = useState([]);


  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    let data = await axios('https://aircall-job.herokuapp.com/activities');
    // console.log('Data: ', data.data);
    setFeeds(data.data);
  }

  // console.log(Feeds);
  console.log('Feeds', Feeds);

  return (
    <div className='container'>
      <Header heading="Activity" />
      <div style={{ backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, }}>
        {/* <Card name="fahad" time="12:20pm" /> */}
        {Feeds.map(data => {
          return(
            <Card name={data.via} time={data.duration} />
          )
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
