import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/LoginPage.css';

function SignupPage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="login-section">
          <h2>📝 회원가입</h2>
          <input type="text" placeholder="사용자 이름" />
          <input type="text" placeholder="지갑 주소" />
          <button>회원가입</button>
        </section>
      </main>
    </div>
  );
}

export default SignupPage;
