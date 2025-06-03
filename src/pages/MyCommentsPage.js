import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/MyCommentsPage.css';

const dummyComments = [
  {
    id: 1,
    paperTitle: 'A Study on Blockchain Consensus Algorithms',
    content: '합의 알고리즘의 비교 분석이 인상적입니다.',
    timestamp: '2025-06-03 10:15',
  },
  {
    id: 2,
    paperTitle: 'Smart Contracts for Supply Chain Transparency',
    content: '공급망에서의 적용 사례가 조금 더 있었으면 좋겠습니다.',
    timestamp: '2025-06-01 16:42',
  },
];

function MyCommentsPage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="my-comments-section">
          <h2>🗨️ 내 리뷰 조회</h2>
          <ul className="comment-list">
            {dummyComments.map((comment) => (
              <li key={comment.id} className="comment-card">
                <h3>{comment.paperTitle}</h3>
                <p>{comment.content}</p>
                <span className="timestamp">🕒 {comment.timestamp}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MyCommentsPage;
