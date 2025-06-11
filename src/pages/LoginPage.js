import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          wallet_address: walletAddress,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data);
        alert('로그인 성공!');
        console.log('로그인 결과:', data);
      } else {
        alert('로그인 실패: 계정 정보가 일치하지 않습니다.');
      }
    } catch (err) {
      console.error('로그인 요청 실패:', err);
      alert('서버 오류로 로그인에 실패했습니다.');
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="login-section">
          <h2>🔐 로그인</h2>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="지갑 주소"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
          <p className="signup">
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
