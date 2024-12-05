import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteInfo() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
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
          } else {
            navigate('/user/myInfo/' + id); // 취소 시 정보 페이지로 돌아감
          }
        };
        
        userDelete(); // 페이지 로드 시 바로 삭제 확인
        
      }, [id, navigate]); // id와 navigate가 변경되면 이 effect가 실행됨

  return (
    <div>DeleteInfo</div>
  )
}
