import React from 'react'
import './PagesCss/Graduation.css';

export default function Graduation() {
  return (
    <div className="container mt-5">
      {/* 졸업요건 */}
      <div className="table-responsive col-10 mx-auto rounded-3">
        <table className="table table-bordered text-center">
          <thead className="bg-light">
            <tr>
              <th style={{backgroundColor: '#3026d9', color: '#ffffff'}}>구분</th>
              <th style={{backgroundColor: '#3026d9', color: '#ffffff'}}>졸업기준(설계)</th>
              <th style={{backgroundColor: '#3026d9', color: '#ffffff'}}>취득학점(설계)</th>
              <th style={{backgroundColor: '#3026d9', color: '#ffffff'}}>판정</th>
              <th style={{backgroundColor: '#3026d9', color: '#ffffff'}}>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">신앙 및 세계관</td>
              <td>9</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">인성 및 리더십</td>
              <td>6</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">실무영어</td>
              <td>9</td>
              <td>0</td>
              <td>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">전문교양</td>
              <td>5</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">BSM</td>
              <td>10</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">ICT융합기초</td>
              <td>2</td>
              <td>0</td>
              <td>
                <i className="bi bi-x-circle-fill text-danger"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">자유선택(교양)</td>
              <td>9</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
            <tr>
              <td className="fw-bold">자유선택(교양 또는 비교양)</td>
              <td>12</td>
              <td>0</td>
              <td>
                <i className="bi bi-check-circle-fill text-success"></i>
              </td>
              <td>필요 추가 설명</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
