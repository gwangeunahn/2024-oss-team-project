import React from 'react'

export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4" style={{font : "10px"}}>WanJol</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className="nav-link">서비스 정보</a></li>
        <li className="nav-item"><a href="/" className="nav-link">나의 정보</a></li>
        <li className="nav-item"><a href="/" className="nav-link">졸업 요건</a></li>
        <li className="nav-item"><a href="/" className="nav-link">직업 찾기</a></li>
        <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">로그인</a></li>
      </ul>
    </header>
  )
}
