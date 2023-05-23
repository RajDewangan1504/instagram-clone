import React from 'react';
import './SideNav.css';


const SideNav = () => {
    return (
        <div className='sidenav'>

            <h3 className="sidenav_logo">instagram</h3>
            <div className="sidenav_buttons">
                <button className="sidenav_button">
                <i class="fa-solid fa-house fa-lg"></i>
                    <span>Home</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    <span>Search</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-regular fa-compass fa-lg"></i>
                    <span>Explore</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-solid fa-calendar-plus fa-lg"></i>
                    <span>Reels</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-solid fa-comment-dots fa-lg"></i>
                    <span>Messages</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-solid fa-heart fa-lg"></i>
                    <span>Notification</span>
                </button>
                <button className="sidenav_button">
                <i class="fa-solid fa-square-plus fa-lg"></i>
                    <span>Create</span>
                </button>



            </div>
            <div className="sidenav_more">
                <button className='sidenav_button'>
                <i class="fa-solid fa-bars fa-lg"></i>
                    <span>More</span>
                </button>
            </div>
        </div>

    );
};

export default SideNav;