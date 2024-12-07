import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

export default function MyInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [detailedView, setDetailedView] = useState({ year: null, semester: null });
  
  const { id } = useParams();
  const navigate = useNavigate();

  const userDelete = async () => {
    const isConfirmed = window.confirm('정말로 탈퇴하시겠습니까?');
  
    if (isConfirmed) {
      try {
        await axios.delete('https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/Students/'+id);
        alert('탈퇴되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('Error:', error);
        alert('오류가 발생했습니다.');
      }
    }
  };

  useEffect(() => {
    if (!id) {
      alert("로그인을 해주세요.");
      navigate("/"); // home 페이지로 리디렉션
    }else{  // 데이터 가져오기
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/Students/`+id
          );
          setUserInfo(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchData();
    }
  }, []);

  if (!userInfo) {
    return <div className="text-center">Loading...</div>;
  }

  const { studentNumber, password, ...semesters } = userInfo;

  // 학기별 상세보기 버튼 클릭 핸들러
  const handleViewDetails = (year, semester) => {
    setDetailedView((prev) =>
      prev.year === year && prev.semester === semester ? { year: null, semester: null } : { year, semester }
    );
  };

  return (
    <div className="container mt-5">
      {/* 제목과 수정하기 버튼 */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0 col-10">나의 정보</h3>
        <a href={"/user/updateInfo/"+id} className="nav-link col-1">수정하기</a>
        <a className="nav-link col-1" href="javascript:;" onClick={userDelete}>탈퇴하기</a>
      </div>

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
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취득 평점</td>
                <td>4.0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전공 평점</td>
                <td>3.8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>구분</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>교양 평점</td>
                <td>3.7</td>
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
                            <td colSpan="3" className="bg-light">
                              <button
                                className="btn btn-link text-decoration-none"
                                onClick={() => handleViewDetails(year, semester)}
                              >
                                상세 보기
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>

                      {/* 상세 보기 출력 */}
                      {detailedView.year === year && detailedView.semester === semester && (
                        <div className="mt-3">
                          <h5>상세 정보</h5>
                          <table className="table table-bordered text-center">
                            <thead className="table-light">
                              <tr>
                                <th>과목명</th>
                                <th>성적</th>
                              </tr>
                            </thead>
                            <tbody>
                              {semesters[`${year}-${semester}`]?.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.subject}</td>
                                  <td>{item.grade}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
