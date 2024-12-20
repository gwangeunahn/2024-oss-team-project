import React from 'react'

export default function Header() {

  return (
    <header className="d-flex flex-wrap justify-content-center py-3">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none col-3">
        <span className="fs-2">WanJol</span>
      </a>
      <ul className="nav nav-pills col-7">
        <li className="nav-item"><a href="/serviceInfo" className="nav-link">서비스 소개</a></li>
        <li className="nav-item"><a href="/graduation" className="nav-link">졸업 요건</a></li>
        <li className="nav-item"><a href="/search" className="nav-link">직업 탐색</a></li>
        <li className="nav-item"><a href="/myInfo" className="nav-link">나의 정보</a></li>
      </ul>
      <div className="nav-item col-1">
        <a href="/login" className="btn rounded-pill" aria-current="page">로그인</a>
      </div>
    </header>
  )
}
