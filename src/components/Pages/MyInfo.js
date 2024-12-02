import React from 'react'

export default function MyInfo() {
  return (
    <div className="container mt-5">
      {/* 제목 */}
      <h3 className="text-center mb-4">나의 정보</h3>

      {/* 기본 정보 테이블 */}
      <div className="row mb-4">
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취득 학점</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취득 평점</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전공 평점</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>학점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>교양 평점</td>
                <td>42</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 학기별 정보 */}
      <div className="accordion" id="semesterAccordion">
        {[1, 2, 3, 4].map((year) => (
          <div className="accordion-item mb-3" key={year}>
            <h2 className="accordion-header" id={`headingYear${year}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseYear${year}`}
                aria-expanded="true"
                aria-controls={`collapseYear${year}`}
              >
                {year}학년
              </button>
            </h2>
            <div
              id={`collapseYear${year}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`headingYear${year}`}
              data-bs-parent="#semesterAccordion"
            >
              <div className="accordion-body">
                <div className="row">
                  {[1, 2].map((semester) => (
                    <div className="col-6" key={semester}>
                      <table className="table table-bordered text-center">
                        <thead className="table-light">
                          <tr>
                            <th>이수구분</th>
                            <th>학점</th>
                            <th>평점</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>전공</td>
                            <td>3</td>
                            <td>4.0</td>
                          </tr>
                          <tr>
                            <td>교양</td>
                            <td>12</td>
                            <td>3.7</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="4" className="bg-light">
                              <button className="btn btn-link text-decoration-none">
                                상세 보기
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
