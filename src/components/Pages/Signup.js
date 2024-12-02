import React from 'react'

export default function Signup() {
  return (
    <div>
        <div class="col-md-7 ">
        <h4 class="mb-3">회원가입</h4>
          <div class="row g-3">
            <div class="col-sm-6">
                <label for="studentNumber" class="form-label">학번</label>
                <input type="number" class="form-control" id="studentNumber" placeholder="StudentNumber" required=""/>
                    <div class="invalid-feedback">
                        Your username is required.
                    </div>
            </div>

            <div class="col-sm-6">
                <label for="password" class="form-label">비밀번호</label>
                <input type="password" class="form-control" id="password" placeholder="Password" required=""/>
                    <div class="invalid-feedback">
                        Your username is required.
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
                                    <th>과목명</th>
                                    <th>성적</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input className='form-control col-12'/></td>
                                    <td><input className='form-control col-8'/></td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="4" className="bg-light">
                                    <button className="btn btn-link text-decoration-none">
                                        추가
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

            <hr class="my-4"/>

            <button class="w-100 btn btn-primary btn-lg" type="submit">가입</button>
            </div>
        </div>
    </div>
  )
}
