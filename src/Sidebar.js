import React from 'react';
import { Link } from 'react-router-dom';  // 🟢 Link 컴포넌트 불러오기

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          {/* 🟢 <i> 태그를 사용해 Font Awesome 아이콘 표시 */}
          <Link to="/">
            <i className="far fa-comment-dots"></i> Tweets  {/* 🟢 <svg> 대신 <i> 사용 */}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="far fa-question-circle"></i> About  {/* 🟢 <svg> 대신 <i> 사용 */}
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className="far fa-user"></i> MyPage  {/* 🟢 <svg> 대신 <i> 사용 */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
