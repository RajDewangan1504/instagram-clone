import React from 'react';
import './HomePage.css';
import SideNav from './navigation/SideNav';
import Timeline from './timeline/Timeline';
import Suggestion from './timeline/Suggestion';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="homepage_navbar">
                <SideNav />
            </div>
            <div className="homepage_timeline">
                <Timeline />
                
            </div>

        </div>
    );
};

export default HomePage;