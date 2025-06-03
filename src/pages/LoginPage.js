import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/LoginPage.css';

function LoginPage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="login-section">
          <h2>🔐 로그인</h2>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button>로그인</button>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
