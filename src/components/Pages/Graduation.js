import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PagesCss/Graduation.css';

export default function Graduation({ isLoggedIn }) {
  const [credits, setCredits] = useState({
    '신앙 및 세계관': 0,
    '인성 및 리더십': 0,
    '실무영어': 0,
    '전문교양': 0,
    'BSM': 0,
    'ICT융합기초': 0,
    '자유선택': 0,
    '전공': 0,
  });

  useEffect(() => {
    if (isLoggedIn) {
      // Students API 호출
      axios
        .get('https://672c26ca1600dda5a9f76967.mockapi.io/api/v1/Students/2') // 특정 학생 ID
        .then((studentResponse) => {
          const studentData = studentResponse.data;
          const studentSubjects = [];

          // 학기별 과목 리스트 추출
          Object.keys(studentData).forEach((key) => {
            if (key.includes('-')) {
              studentData[key].forEach((course) => {
                if (course.subject) {
                  studentSubjects.push(course.subject);
                }
              });
            }
          });

          // Class API 호출
          axios
            .get('https://672818a9270bd0b975544f0f.mockapi.io/api/v1/class')
            .then((classResponse) => {
              const classData = classResponse.data;
              const calculatedCredits = { ...credits };

              // 학생 과목과 Class API 데이터 비교
              classData.forEach((course) => {
                if (studentSubjects.includes(course.name.trim())) {
                  if (calculatedCredits[course.type]) {
                    calculatedCredits[course.type] += course.credit;
                  } else {
                    calculatedCredits[course.type] = course.credit;
                  }
                }
              });

              setCredits(calculatedCredits);
            })
            .catch((error) => {
              console.error('Error fetching class data:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }, [isLoggedIn]);

  return (
    <div className="container mt-5">
      <div className="table-responsive col-10 mx-auto rounded-3">
        <table className="table table-bordered text-center">
          <thead className="bg-light">
            <tr>
              <th style={{ backgroundColor: '#3026d9', color: '#ffffff' }}>구분</th>
              <th style={{ backgroundColor: '#3026d9', color: '#ffffff' }}>졸업기준(설계)</th>
              <th style={{ backgroundColor: '#3026d9', color: '#ffffff' }}>취득학점(설계)</th>
              <th style={{ backgroundColor: '#3026d9', color: '#ffffff' }}>판정</th>
              <th style={{ backgroundColor: '#3026d9', color: '#ffffff' }}>비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: '신앙 및 세계관', criteria: 9 },
              { type: '인성 및 리더십', criteria: 6 },
              { type: '실무영어', criteria: 9 },
              { type: '전문교양', criteria: 5 },
              { type: 'BSM', criteria: 10 },
              { type: 'ICT융합기초', criteria: 2 },
              { type: '자유선택', criteria: 9 },
              { type: '전공', criteria: 12 },
            ].map((category, index) => (
              <tr key={index}>
                <td className="fw-bold">
                  <Link to={`/detail/${category.type}`} className="text-decoration-none">
                    {category.type}
                  </Link>
                </td>
                <td>{category.criteria}</td>
                <td>{credits[category.type] || 0}</td>
                <td>
                  <i
                    className={`bi bi-${
                      credits[category.type] >= category.criteria ? 'check' : 'x'
                    }-circle-fill text-${credits[category.type] >= category.criteria ? 'success' : 'danger'}`}
                  ></i>
                </td>
                <td>필요 추가 설명</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
