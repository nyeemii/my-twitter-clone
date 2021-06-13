import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1398234136708452354"} />

                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="BenAndBenMusic"
                  options={{ height: 400 }}
                />

                <TwitterShareButton
                  url={"https://www.facebook.com/nyeemmii/"}
                  options={{ text: "#reactjs is awesome", via: "nyeemii" }}
                />
            </div>
        </div>
    )
}

export default Widgets
