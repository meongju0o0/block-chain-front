import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';

function PaperDetail() {
  const { id } = useParams();

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section>
          <h2>📄 논문 상세 페이지 (ID: {id})</h2>
          <p>논문에 대한 상세 정보가 여기에 표시됩니다.</p>

          <h3>💬 댓글 달기</h3>
          <input type="text" placeholder="댓글 내용" />
          <button>댓글 등록</button>
        </section>
      </main>
    </div>
  );
}

export default PaperDetail;
