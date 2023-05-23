import React from 'react';
import './Post.css';


const Post = ({user,postImage,likes,timestamp}) => {
    return (
        <>
            <div className='post'>

                <div className="post_header">

                    <div className="post_headerAuthor">
                        <img id='post_img' src='https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg'></img>
                        {/* <i class="fa-regular fa-circle-user fa-xl"></i> */}
                        {user} <span>  {timestamp}</span>
                    </div>
                    <i className="fa-solid fa-ellipsis fa-lg"></i>
                    

                </div>
                <div className="post_image">
                <img src={postImage}></img>
                </div>
                
               
               
                <div className="post_footer">
                    <div className="post_footerIcons">
                        <div className="post_iconMain">
                            <i className="fa-regular fa-heart fa-lg postIcon"  ></i>
                            <i className="fa-sharp fa-regular fa-comment fa-lg postIcon" ></i>
                            <i className="fa-solid fa-location-arrow fa-lg postIcon"  ></i>
                        </div>
                        <div className="post_iconSave">
                            <i class="fa-regular fa-bookmark fa-lg postIcon" ></i>
                        </div>
                    </div>
                    <div className="like_cmt">
                        {likes} likes
                        <span>View all 45 comments </span>
                        <span>Add a comment...</span>
                    </div>



                </div>



            </div>

        </>


    );
};

export default Post;