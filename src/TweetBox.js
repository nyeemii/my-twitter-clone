import { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "JB Evangelista",
            username: "nyeemii",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/116430932_1687153871459682_7787455806089001651_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH--a9GC3P57w94eDScYeh46kYAiUBK6m3qRgCJQErqbWX8n4tASAPUBJL6Vc531S_SiPURVjJNx4OCvI9KMj1Y&_nc_ohc=XjT7H0dUvJ4AX9rra7s&_nc_ht=scontent.fmnl25-2.fna&oh=a9457a8f26314fc7718b57410c6e9e60&oe=60CA2ED8",
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/116430932_1687153871459682_7787455806089001651_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH--a9GC3P57w94eDScYeh46kYAiUBK6m3qRgCJQErqbWX8n4tASAPUBJL6Vc531S_SiPURVjJNx4OCvI9KMj1Y&_nc_ohc=XjT7H0dUvJ4AX9rra7s&_nc_ht=scontent.fmnl25-2.fna&oh=a9457a8f26314fc7718b57410c6e9e60&oe=60CA2ED8" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
