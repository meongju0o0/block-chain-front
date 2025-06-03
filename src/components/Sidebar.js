import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>📚 메뉴</h2>
      <ul>
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/submit">논문 제출</Link></li>
        <li><a href="#my-comments">내 리뷰 조회</a></li>
        <li><Link to="/">전체 논문 조회</Link></li>
        <li><a href="#topics">주제 별 논문 조회</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;