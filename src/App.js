import React from 'react';
// 🟢 경로 설정: React Router의 BrowserRouter, Routes, Route 불러오기
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
// 🟢 경로 설정: MyPage와 About 컴포넌트 불러오기
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import './App.css';

const App = () => {
  return (
    // 🟢 주석 해제: BrowserRouter를 사용해 라우팅 설정
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              {/* 🟢 경로 설정: Tweets, About, MyPage 컴포넌트를 적절히 연결 */}
              <Route path="/" element={<Tweets />} />
              <Route path="/about" element={<About />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
