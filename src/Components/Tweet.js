import React from 'react';
import '../Pages/Tweets.css';  // 🟢 정확한 경로로 수정

const Tweet = ({ tweet }) => {
  // 🟢 트윗 생성 일자 형식 수정: 'yyyy. m. d.' 형식으로 변환
  // - `toLocaleDateString`을 사용해 한국어 형식으로 변환합니다.
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} alt={`${tweet.username}'s profile`} className="tweet__profile--image" />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* 🟢 유저 이름 표시: tweet__username 클래스 유지 */}
            <span className="tweet__username">{tweet.username}</span>
            {/* 🟢 클래스명 수정: tweet__date ➡️ tweet__createdAt */}
            <span className="tweet__createdAt">{parsedDate}</span>  {/* 🟢 클래스명 변경 */}
          </div>
        </div>
        {/* 🟢 트윗 메시지 표시 */}
        <div className="tweet__message">
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
