import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>📚 메뉴</h2>
      <ul>
        <li><a href="#login">로그인</a></li>
        <li><a href="#submit">논문 제출</a></li>
        <li><a href="#my-comments">내 리뷰 조회</a></li>
        <li><Link to="/">전체 논문 조회</Link></li>
        <li><a href="#topics">주제 별 논문 조회</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;