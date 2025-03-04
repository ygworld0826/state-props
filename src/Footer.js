import React from 'react';

// 📌 Footer 컴포넌트를 선언합니다.
const Footer = () => {
  // 🟢 변경 사항 1: <div> 대신 <footer> 시멘틱 엘리먼트를 사용했습니다.
  // - <footer>는 HTML5 시멘틱 요소로, 페이지의 하단 정보를 담습니다.
  // - 시멘틱 요소를 사용하면 검색 엔진 최적화(SEO)와 접근성이 향상됩니다.
  return (
    <footer>
      {/* 🟢 변경 사항 2: <div>와 <p> 요소를 추가해 내용과 레이아웃을 구성했습니다. */}
      {/* - <div>는 스타일링과 레이아웃 조정을 위한 컨테이너 역할입니다. */}
      {/* - <p>는 텍스트를 표시하기 위한 요소입니다. */}
      <div>
        <p>© 2025 Your Company. All rights reserved.</p>  {/* 🟢 예시 텍스트 추가: 저작권 정보 */}
      </div>
    </footer>
  );
};

// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 요소 footer가 포함되어야 합니다.

export default Footer;  // 📌 Footer 컴포넌트를 내보냅니다.
