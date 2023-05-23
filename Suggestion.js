import React from 'react';
import './Suggestion.css';

const Suggestion = () => {
    return (
        <div className='suggestions'>

            <div className="suggestions_usernames">

                <div className="suggestion_username">
                    <div className="username_left">
                    <img  id='username' src='https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg'></img>
                        {/* <i class="fa-regular fa-circle-user fa-xl"></i> */}
                        <span className="avatar">

                            <div className="username_info">
                                <span className='username'>Instagram_official</span>
                                <span className='relation'> Original Instagram</span>
                            </div>
                        </span>
                    </div>
                    <button className='follow_button'>Follow</button>

                </div>
            </div>


            <div className="suggestion_title">

                <p>Suggested for you</p>
                <button className='seeAll_button'>see All</button>
            </div>
           
            <div className="suggestions_usernames">

                {/* suggestions start */}
                <div className="suggestion_username">
                    <div className="username_left">
                        <i class="fa-regular fa-circle-user fa-xl"></i>
                        <span className="avatar">

                            <div className="username_info">
                                <span className='username'>priya_32</span>
                                <span className='relation'>Followed by Megha_92 +1</span>
                            </div>
                        </span>
                    </div>
                    <button className='follow_button'>Follow</button>

                </div>
                <div className="suggestion_username">
                    <div className="username_left">
                        <i class="fa-regular fa-circle-user fa-xl"></i>
                        <span className="avatar">

                            <div className="username_info">
                                <span className='username'>sha_sha_</span>
                                <span className='relation'> Followed by kunal_1 + 3 more </span>
                            </div>
                        </span>
                    </div>
                    <button className='follow_button'>Follow</button>

                </div>
                <div className="suggestion_username">
                    <div className="username_left">
                        <i class="fa-regular fa-circle-user fa-xl"></i>
                        <span className="avatar">

                            <div className="username_info">
                                <span className='username'>Minal_81</span>
                                <span className='relation'> Riya_dav + 5 more</span>
                            </div>
                        </span>
                    </div>
                    <button className='follow_button'>Follow</button>

                </div>
                <div className="suggestion_username">
                    <div className="username_left">
                        <i class="fa-regular fa-circle-user fa-xl"></i>
                        <span className="avatar">

                            <div className="username_info">
                                <span className='username'>sahid_Ahmad</span>
                                <span className='relation'> Minu_43 + 2 more</span>
                            </div>
                        </span>
                    </div>
                    <button className='follow_button'>Follow</button>

                </div>

            </div>
            {/* suggestions End */}



            <div className="suggestion_footer">
                <a href='#'>About.</a>
                <a href='#'>Help.</a>
                <a href='#'>Press.</a>
                <a href='#'>Api.</a>
                <a href='#'>Job. </a>
                <a href='#'>Privacy.</a>
                <a href='#'>Terms.</a>
                
                <a href='#'>Location.</a>
                <p>Language. MetaVerified.</p>
                <p>@2023 INSTAGRAM FROM META</p>
            </div>


        </div>
    );
};

export default Suggestion;