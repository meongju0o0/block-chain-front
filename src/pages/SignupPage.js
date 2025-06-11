import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';
import '../styles/LoginPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          wallet_address: walletAddress,
        }),
      });

      if (response.ok) {
        alert('회원가입 성공!');
        // 여기에 페이지 이동이나 폼 초기화 가능
      } else {
        alert('회원가입 실패!');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('서버 오류로 회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <section className="login-section">
          <h2>📝 회원가입</h2>
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
          <button onClick={handleSignup}>회원가입</button>
        </section>
      </main>
    </div>
  );
}

export default SignupPage;
