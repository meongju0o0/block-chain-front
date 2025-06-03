import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/SubmitPage.css';

function SubmitPage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="submit-section">
          <h2>📄 논문 제출</h2>
          <input type="text" placeholder="논문 제목" />
          <textarea placeholder="논문 요약" rows="4"></textarea>
          <input type="file" accept="application/pdf" />
          <button>제출하기</button>
        </section>
      </main>
    </div>
  );
}

export default SubmitPage;
