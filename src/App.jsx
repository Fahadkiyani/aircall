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
  }, []);

  const fetchFeeds = async () => {
    let data = await axios('https://aircall-job.herokuapp.com/activities');
    // console.log('Data: ', data.data);
    return data.data;
  }

  return (
    <div className='container'>
      <Header heading="Activity" />
      <div className="CallLogsContainer" style={{backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, paddingRight:20}}>
        {/* <Card name="fahad" time="12:20pm" /> */}
        {Feeds.map(data => {
          return (
            <Card key={data.id} from={data.from} to={data.to} id={data.id} time={data.duration}  callType={data.call_type} />
          )
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
