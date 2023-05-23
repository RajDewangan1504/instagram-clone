import React, { useState } from 'react';
import './Timeline.css';
import Suggestion from './Suggestion';
import Post from './posts/Post';

const Timeline = () => {
    const [posts, setPosts] = useState([{
        user: "raj_dav",
        postImage: "https://blog.hootsuite.com/wp-content/uploads/2022/01/Instagram-statistics.png",
        likes: 2735,
        timestamp: "3d",

    },
    {
        user: "Neha_sah_21",
        postImage: "https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo.png",
        likes: 147,
        timestamp: "3d",

    },
    {
        user: "Prem_sao",
        postImage: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/How%20To%20Post%20on%20IG.jpg?width=595&height=400&name=How%20To%20Post%20on%20IG.jpg",
        likes: 2890,
        timestamp: "3d",

    },
    {
        user: "Ka_jal_32",
        postImage: "https://www.postplanner.com/hubfs/what-to-post-on-instagram.png",
        likes: 953,
        timestamp: "3d",

    }
    ]);

    return (


        <div className='timeline'>

            <div className="timeline_left">
                <div className="story_items">
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/three-color-circle-png.jpg'></img>
                        <p>santosh_ad..</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/circle-border.jpg'></img>
                        <p>Sam_ron12</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/instagram-profile-picture-border.jpg'></img>
                        <p>Ulffat_24</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://cdn4.sharechat.com/48e15df_1661746536757_sc.jpeg'></img>
                        <p>Attitude_b</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/yellow-circle-on-instagram.jpg'></img>
                        <p>angle_priya</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/instagram-profile-picture-border.jpg'></img>
                        <p>Nak_hre</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://i.pinimg.com/736x/73/0d/e7/730de7c8b357dd408ffaec3911658dd0.jpg'></img>
                        <p>tv_start</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/instagram-profile-picture-circle-dimensions.jpg'></img>
                        <p>Mr_rocking</p>
                    </div>

                    <div className="story_item">
                        <img className='story_img' src='https://i.pinimg.com/736x/73/0d/e7/730de7c8b357dd408ffaec3911658dd0.jpg'></img>
                        <p>tv_start</p>
                    </div>
                    <div className="story_item">
                        <img className='story_img' src='https://www.imagesplatform.com/imgs/instagram-profile-picture-circle-dimensions.jpg'></img>
                        <p>Mr_rocking</p>
                    </div>




                </div>


                <div className="timeline_posts">
                    {posts.map(post => (
                        <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
                    ))}
                </div>
            </div >

            <div className="timeline_right">
                <Suggestion />
            </div>

        </div >
    );
};

export default Timeline;