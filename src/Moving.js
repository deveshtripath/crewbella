import React from 'react'
import "./Moving.css"
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Main from './Main';


function Moving() {
    return (
      <div>
      <div>
        <div className="headers">
          <div className="header__icons">
          <div className="header__icon header__icon--active">
            <HomeIcon/>
            <p>Top</p>
            </div>
          <div className="header__icon">
            <FlashOnIcon/>
            <p>Profile</p>
            </div>
            
          <div className="header__icon">
            <FlashOnIcon/>
            <p>Interactions</p>
            </div>
          <div className="header__icon">
            <LiveTvIcon/>
            <p>Client Posting</p>
            </div>
          <div className="header__icon">
             <VideoLibraryIcon/>
            <p>Skills</p>
            </div>
          <div className="header__icon">
           <SearchIcon/>
            <p>Profassan</p>
            </div>
          <div className="header__icon">
            <PersonOutlineIcon/>
            <p>Account</p>
            </div>
            
          </div>

          <div>
            {/* <Main/> */}
          </div>
          </div>
       
        </div>
      </div>  

        
    )
}

export default Moving
