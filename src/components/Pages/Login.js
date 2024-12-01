import React from 'react'

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-center mb-4">로그인</h1>
      </div>

      {/* 로그인 폼 */}
      <div className="d-flex justify-content-center">
        <div className="border border-2 rounded-3 p-4 col-12 col-md-4">
          {/* 학번 */}
          <div className="mb-3">
            <input id="StudentNumber" className="form-control" type="text" placeholder="학번"/>
          </div>

          {/* 비밀번호 */}
          <div className="mb-3">
            <input id="Password" className="form-control" type="password" placeholder="비밀번호"/>
          </div>

          {/* 로그인 버튼 */}
          <div className="d-flex justify-content-center">
            <button className="btn w-100">로그인</button>
          </div>
        </div>
      </div>
    </div>
  )
}
