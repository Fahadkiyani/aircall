import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js';
import axios from 'axios';
import Header from './Header.jsx';
import LabelBottomNavigation from './components/bottomNavigator/BottomNavigator';
import HeaderSubParts from './components/HeaderSubParts/HeaderSubParts'
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

// Import redux
import store from './Components/CartItems/store';
import { Provider } from 'react-redux';
// selector and dispatch
import { useSelector, useDispatch } from 'react-redux'

import './css/app.css'

let activefeeds = [];
let archivedfeeds = [];
const App = () => {
  // const [ActiveFeeds, setActiveFeeds] = useState([]);
  // const [ArchivedFeeds, setArchivedFeeds] = useState([]);

  // const cart = useSelector(state => state.cart)
  // let dispatch = useDispatch();


  useEffect(() => {
    async function c() {
      let data = await fetchFeeds();
      for (let i = 0; i < await data.length; i++) {
        let d = data[i];
        if (d.is_archived === false) {
          activefeeds.push(d)
        } else {
          archivedfeeds.push(d)
        }
        if (i + 1 === data.length) {
          setActiveFeeds(activefeeds);
          setArchivedFeeds(archivedfeeds);
        }
      }
    }
    c();
  });

  const fetchFeeds = async () => {
    let data = await axios('https://aircall-job.herokuapp.com/activities');
    // console.log('Data: ', data.data);
    return data.data;
  }

  let counter = ActiveFeeds.length + 1;

  const archiveAll = () => {
    ActiveFeeds.map((data, i) => {
      axios.post(`https://aircall-job.herokuapp.com/activities/${data.id}`, {
        is_archived: true
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }

  const resetAll = () => {
    axios.get('https://aircall-job.herokuapp.com/reset');
  }

  return (
    <Provider store={store}>
      <div className='container'>
        <Header heading="Activity" />
        {/* call logs container */}
        <div className="CallLogsContainer" style={{ backgroundColor: 'rgba(200,200,210,0.1)', height: '100%', paddingTop: 20, paddingRight: 20 }}>
          {ActiveFeeds.length === 0 ?
            <div onClick={() => { resetAll() }} className='archive_all_calls_container'>
              <RotateLeftIcon />
              <h1 className="archive_all_calls_text">
                Reset all archived items
              </h1>
            </div>
            :
            <div onClick={() => { archiveAll() }} className='archive_all_calls_container'>
              <ArchiveTwoToneIcon />
              <h1 className="archive_all_calls_text">
                Archive all calls
              </h1>
            </div>
          }

          {ActiveFeeds.map((data, i, length) => {
            // if (data.is_archived === false) {
            //   counter = counter + 2;
            // } else if ((i + 1 === length && counter < 0 )|| ActiveFeeds.length === 0) {
            //   counter = 0;
            // }
            return (
              <Card key={data.id} isArchived={data.is_archived} from={data.from} to={data.to} id={data.id} time={data.created_at} duration={data.duration} callType={data.call_type} via={data.via} direction={data.direction} />
            )
          })}
          <div style={{ marginBottom: 200 }}></div>
          <div>
            {ActiveFeeds.length === 0 ? <div className='no_items'>No active ActiveFeeds to show</div> : <></>}
          </div>
        </div>
        <div className="bottom_navigation_container">
          <LabelBottomNavigation />
        </div>

      </div>
    </Provider>

  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
