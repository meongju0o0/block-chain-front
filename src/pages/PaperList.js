import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PaperCard.css';

function PaperList() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/papers/')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPapers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('페이퍼 목록 로딩 실패:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <section>
      <h2>📑 전체 논문 조회</h2>
      <div className="paper-list">
        {papers.map(paper => (
          <Link to={`/paper/${paper.id}`} key={paper.id} className="paper-card">
            <h3>{paper.title}</h3>
            <p>{paper.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PaperList;
