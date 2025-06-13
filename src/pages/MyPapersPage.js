// src/pages/MyPapersPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/PaperCard.css';  // PaperCard.css 재사용해도 무방합니다

function MyPapersPage() {
  const { user } = useAuth();
  const ownerId = user?.id;

  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ownerId) {
      setError('로그인이 필요합니다.');
      setLoading(false);
      return;
    }
    fetch(`http://localhost:8000/api/v1/papers/owner/${ownerId}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPapers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('내 논문 조회 실패:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [ownerId]);

  if (loading) return <p>로딩 중...</p>;
  if (error)   return <p>오류 발생: {error}</p>;

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="my-papers-section">
          <h2>📚 내 논문 조회</h2>
          {papers.length === 0 ? (
            <p>등록된 논문이 없습니다.</p>
          ) : (
            <div className="paper-list">
              {papers.map(paper => (
                <Link
                  to={`/paper/${paper.id}`}
                  key={paper.id}
                  className="paper-card"
                >
                  <h3>{paper.title}</h3>
                  <p>{paper.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default MyPapersPage;
