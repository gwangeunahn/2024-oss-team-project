import React, { useEffect, useState } from "react";

export default function SearchJob() {
  const [jobs, setJobs] = useState([]); // 전체 데이터
  const [filteredJobs, setFilteredJobs] = useState([]); // 필터링된 데이터
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [salaryFilter, setSalaryFilter] = useState(""); // 연봉 필터

  useEffect(() => {
    // API에서 데이터 가져오기
    fetch(
      "https://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=f5b128d18e12675df10d93c07ae8e532&svcType=api&svcCode=JOB&responseType=json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.dataSearch && data.dataSearch.content) {
          setJobs(data.dataSearch.content);
          setFilteredJobs(data.dataSearch.content); // 초기 데이터를 필터링 데이터로 설정
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // 검색어 또는 연봉 필터 변경 시 필터링
  useEffect(() => {
    let filtered = jobs;

    // 검색 필터 적용
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          (job.job && job.job.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (job.summary && job.summary.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // 연봉 필터 적용
    if (salaryFilter) {
      filtered = filtered.filter((job) => job.salery && job.salery.includes(salaryFilter));
    }

    setFilteredJobs(filtered);
  }, [searchTerm, salaryFilter, jobs]);

  return (
    <div>
      <h1>직업 정보</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="직업 또는 요약 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "40%",
            marginRight: "20px",
          }}
        />
        {/* 연봉 필터 Select */}
        <select
          value={salaryFilter}
          onChange={(e) => setSalaryFilter(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
          }}
        >
          <option value="">연봉 필터</option>
          <option value="3천만원">3천만원 ↑</option>
          <option value="5천만원">5천만원 ↑</option>
        </select>
      </div>

      {/* 직업 리스트 */}
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>직업</th>
            <th>요약</th>
            <th>유사 직업</th>
            <th>연봉</th>
            <th>고용 전망</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.job || "N/A"}</td>
                <td>{job.summary || "N/A"}</td>
                <td>{job.similarJob || "N/A"}</td>
                <td>{job.salery || "N/A"}</td>
                <td>{job.possibility || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                검색 조건에 맞는 결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
