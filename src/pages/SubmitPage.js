import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/SubmitPage.css';

function SubmitPage() {
  const { user } = useAuth();
  const ownerId = user?.id;

  const [title, setTitle] = useState('');       // 🔥 제목 state
  const [summary, setSummary] = useState('');   // 🔥 요약 state
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!file || !ownerId || !title.trim() || !summary.trim()) {
      alert('모든 필드를 입력하고 PDF 파일을 첨부하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('owner_id', ownerId);
    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('file', file);

    try {
      const response = await fetch(`http://localhost:8000/api/v1/papers/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('논문이 성공적으로 제출되었습니다!');
        // 필요시 상태 초기화
        setTitle('');
        setSummary('');
        setFile(null);
      } else {
        const err = await response.json();
        const message =
          typeof err.detail === 'string'
            ? err.detail
            : Array.isArray(err.detail)
            ? err.detail.map(d => d.msg).join(', ')
            : JSON.stringify(err);
        alert('제출 실패: ' + message);
      }
    } catch (err) {
      console.error('제출 중 에러:', err);
      alert('제출 중 네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="submit-section">
          <h2>📄 논문 제출</h2>

          <input
            type="text"
            placeholder="논문 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="논문 요약"
            rows="4"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={handleSubmit}>제출하기</button>
        </section>
      </main>
    </div>
  );
}

export default SubmitPage;
