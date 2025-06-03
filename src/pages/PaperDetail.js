import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/PaperDetail.css';

const dummyComments = [
  { id: 1, content: '흥미로운 접근 방식입니다!', timestamp: '2025-06-03 11:10' },
  { id: 2, content: '다음 연구가 기대되네요.', timestamp: '2025-06-03 14:45' },
];

function PaperDetail() {
  const { id } = useParams();

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="paper-detail-section">
          <h2>📄 논문 상세 페이지</h2>
          <div className="paper-meta">
            <p><strong>논문 ID:</strong> {id}</p>
            <p><strong>제목:</strong> Every author as First Author</p>
            <p><strong>요약:</strong> We propose a new standard for writing author names on papers and in bibliographies, which places every author as a first author — superimposed. This approach enables authors to write papers as true equals, without any advantage given to whoever’s name happens to come first alphabetically (for example). We develop the technology for implementing this standard in LATEX, BIBTEX, and HTML; show several examples; and discuss further advantages.</p>
            <p><strong>작성일:</strong> 2023-04-03</p>
            <a href="/2304.01393v1.pdf" target="_blank" rel="noopener noreferrer" className="view-pdf-button">
              📄 View PDF
            </a>
          </div>

          <div className="comment-box">
            <h3>💬 댓글 달기</h3>
            <textarea placeholder="댓글 내용을 입력하세요..." rows="4"></textarea>
            <button>댓글 등록</button>
          </div>

          <hr className="comment-divider" />
          <h3>💬 댓글 목록</h3>
          <div className="comment-list">
            {dummyComments.map(comment => (
              <div className="comment" key={comment.id}>
                <p>{comment.content}</p>
                <span>{comment.timestamp}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaperDetail;
