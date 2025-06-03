import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/LoginPage.css';

function SubmitPage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="login-section">
          <h2>📄 논문 제출</h2>
          <input type="text" placeholder="논문 제목" />
          <textarea placeholder="논문 내용" rows="6"></textarea>
          <button>제출하기</button>
        </section>
      </main>
    </div>
  );
}

export default SubmitPage;
