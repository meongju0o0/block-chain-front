import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PaperCard.css';

const dummyPapers = [
  { id: 1, title: 'A Study on Blockchain Consensus Algorithms', summary: 'Lorem ipsum dolor sit amet...' },
  { id: 2, title: 'Decentralized Identity Verification Framework', summary: 'Suspendisse non justo eget urna...' },
  { id: 3, title: 'Smart Contracts for Supply Chain Transparency', summary: 'Aliquam erat volutpat. Vestibulum...' },
  { id: 4, title: 'IPFS and Immutable Data Storage', summary: 'Ut sodales, arcu a scelerisque vehicula...' }
];

function PaperList() {
  return (
    <section>
      <h2>📑 전체 논문 조회</h2>
      <div className="paper-list">
        {dummyPapers.map(paper => (
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