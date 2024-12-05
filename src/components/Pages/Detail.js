import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  const { type } = useParams();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://672818a9270bd0b975544f0f.mockapi.io/api/v1/class?type=${encodeURIComponent(type)}`)
      .then((response) => {
        setClasses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="container mt-5">
      <h2>{type} - 상세 정보</h2>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>강의명</th>
                <th>학점</th>
                <th>전공</th>
              </tr>
            </thead>
            <tbody>
              {classes.length > 0 ? (
                classes.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.credit}</td>
                    <td>{item.major}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">해당 항목에 대한 정보가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
          <Link to="/" className="btn btn-primary mt-3">
            뒤로가기
          </Link>
        </div>
      )}
    </div>
  );
}
