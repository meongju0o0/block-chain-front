// src/pages/PaperDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/PaperDetail.css';

function PaperDetail() {
  const { id } = useParams();          // 논문 ID
  const { user } = useAuth();          // 로그인된 유저
  const [paper, setPaper] = useState(null);
  const [comments, setComments] = useState([]);    // 댓글 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');

  // 논문 상세 + 댓글 목록 함께 로드
  useEffect(() => {
    const load = async () => {
      try {
        const [paperRes, commentRes] = await Promise.all([
          fetch(`http://localhost:8000/api/v1/papers/${id}`),
          fetch(`http://localhost:8000/api/v1/comments/paper/${id}`)
        ]);

        if (!paperRes.ok) throw new Error(`Paper HTTP ${paperRes.status}`);
        if (!commentRes.ok) throw new Error(`Comments HTTP ${commentRes.status}`);

        const paperData = await paperRes.json();
        const commentData = await commentRes.json();

        setPaper(paperData);
        setComments(commentData);
      } catch (err) {
        console.error('로드 오류:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) {
      return alert('댓글 내용을 입력하세요.');
    }
    if (!user) {
      return alert('로그인이 필요합니다.');
    }

    const form = new URLSearchParams();
    form.append('paper_id', id);
    form.append('reviewer_id', user.id);
    form.append('content', commentText);

    try {
      const res = await fetch('http://localhost:8000/api/v1/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
      });
      if (res.ok) {
        alert('댓글이 등록되었습니다!');
        const newComment = await res.json();
        setComments(prev => [...prev, newComment]);
        setCommentText('');
      } else {
        const err = await res.json();
        alert('등록 실패: ' + (err.detail || JSON.stringify(err)));
      }
    } catch (err) {
      console.error('댓글 등록 에러:', err);
      alert('네트워크 오류로 댓글 등록에 실패했습니다.');
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  const { title, summary, created_at } = paper;

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="paper-detail-section">
          <h2>📄 논문 상세 페이지</h2>
          <div className="paper-meta">
            <p><strong>논문 ID:</strong> {id}</p>
            <p><strong>제목:</strong> {title}</p>
            <p><strong>요약:</strong> {summary}</p>
            <p><strong>작성일:</strong> {new Date(created_at).toLocaleString()}</p>
            <a
              href={`http://localhost:8000/api/v1/papers/${id}/download`}
              target="_blank"
              rel="noopener noreferrer"
              className="view-pdf-button"
            >
              📄 View PDF
            </a>
          </div>

          <div className="comment-box">
            <h3>💬 댓글 달기</h3>
            <textarea
              placeholder="댓글 내용을 입력하세요..."
              rows="4"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>댓글 등록</button>
          </div>

          <hr className="comment-divider" />
          <h3>💬 댓글 목록</h3>
          <div className="comment-list">
            {comments.length === 0 && <p>등록된 댓글이 없습니다.</p>}
            {comments.map((c) => (
              <div className="comment" key={c.id}>
                <p>{c.content}</p>
                <span>{new Date(c.created_at).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaperDetail;
