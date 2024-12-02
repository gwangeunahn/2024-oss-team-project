import React, { useEffect, useState } from "react";

export default function SearchJob() {
  const [jobs, setJobs] = useState([]); // 전체 데이터
  const [filteredJobs, setFilteredJobs] = useState([]); // 필터링된 데이터
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [salaryFilter, setSalaryFilter] = useState(""); // 연봉 필터

  useEffect(() => {
    fetch(
      "https://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=f5b128d18e12675df10d93c07ae8e532&svcType=api&svcCode=JOB"
    )
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const content = xmlDoc.getElementsByTagName("content");

        // XML 데이터를 배열로 변환
        const jobsArray = Array.from(content).map((item) => {
          return {
            job: item.getElementsByTagName("job")[0]?.textContent || "N/A",
            summary: item.getElementsByTagName("summary")[0]?.textContent || "N/A",
            similarJob: item.getElementsByTagName("similarJob")[0]?.textContent || "N/A",
            salery: item.getElementsByTagName("salery")[0]?.textContent || "N/A",
            possibility: item.getElementsByTagName("possibility")[0]?.textContent || "N/A",
          };
        });

        setJobs(jobsArray);
        setFilteredJobs(jobsArray); // 초기 필터링 데이터 설정
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = jobs;

    // 검색 필터 적용
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 연봉 필터 적용
    if (salaryFilter) {
      filtered = filtered.filter((job) => job.salery.includes(salaryFilter));
    }

    setFilteredJobs(filtered);
  }, [searchTerm, salaryFilter, jobs]);

  return (
    <div>
      <h1>직업 정보</h1>

      {/* 검색창 및 연봉 필터 */}
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
                <td>{job.job}</td>
                <td>{job.summary}</td>
                <td>{job.similarJob}</td>
                <td>{job.salery}</td>
                <td>{job.possibility}</td>
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
