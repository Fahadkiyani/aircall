

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './bottomNavigationStyles.css'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('feeds');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className="test" sx={{width: 276, borderRadius: 20, marginTop: -10, zIndex: 1000000, marginLeft: "50px", position: 'fixed',overflow:'hidden'}} value={value} onChange={handleChange}>
      <BottomNavigationAction
       style={{color:'#00B388',fontWeight:900}}
        label="___"
        value="feeds"
        icon={value === 'feeds'?<LocalPhoneIcon style={{color:'#444',fontSize:22,fontWeight:100}} />:<PhoneOutlinedIcon  style={{color:'#666'}}/>}
      />
      <BottomNavigationAction
       style={{color:'#00B388',fontWeight:900}}
        label="___"
        value="archived"
        icon={value === 'archived'?<ArchiveIcon style={{color:'#444',fontSize:22,fontWeight:100}} />:<ArchiveOutlinedIcon  style={{color:'#666'}}/>}
      />

    </BottomNavigation>
  );
}
