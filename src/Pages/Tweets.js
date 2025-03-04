import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';  // 🟢 Tweets.css로 경로 수정
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);  // 🟢 초기 상태로 dummyTweets 전체 사용
  const [newTweet, setNewTweet] = useState('');
  const [username, setUsername] = useState('Bob');

  const handleButtonClick = () => {
    if (newTweet.trim() === '') return;
    const tweet = {
      id: tweets.length + 1,
      username: username,
      content: newTweet,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      createdAt: new Date().toISOString(),
    };
    setTweets([tweet, ...tweets]);  // 🟢 새 트윗을 맨 위에 추가
    setNewTweet('');
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setNewTweet(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" alt="User Profile" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                />
                <textarea
                  placeholder="What's happening?"
                  value={newTweet}
                  onChange={handleChangeMsg}
                  className="tweetForm__input--message"
                />
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {/* 🟢 모든 트윗을 map을 사용해 렌더링 */}
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
