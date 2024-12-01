import React from 'react'
import './PagesCss/ServiceInfo.css';
import ImgInfo from '../../Img/ImgInfo.jpg'

export default function Info() {
  return (
    <div className='contaioner d-flex flex-wrap justify-content-center'>
        <div className='img col-6'>
            <img src={ImgInfo} />
        </div>
        <div className='info col-6'>
            <h3>WanJol(완졸)</h3>
            <p>"완벽한 졸업"의 줄임말로, 한국어로 간결하고 친근한 느낌의 졸업 도우미 서비스</p>
            <ol>
                <li>
                    졸업심사 결과 분석 및 강의 추천
                    <ul>
                        <li>
                            졸업요건 항목에 따른 현재 학점 상황 분석
                        </li>
                        <li>
                            부족한 학점과 항목에 맞는 강의를 자동으로 추천
                        </li>
                        <li>
                            기존의 수강편람을 일일이 검색하지 않고도 필요한 강의를 한눈에 확인
                        </li>
                    </ul>
                </li>
                <li>
                    학점 평점 계산기 제공
                    <ul>
                        <li>
                            등록된 강의에 따라 학기별 평점 및 누적 평점을 자동 계산
                        </li>
                    </ul>
                </li>
                <li>
                    진로 정보 제공
                    <ul>
                        <li>
                            오픈 API를 활용해 해당 학부 또는 전공에 관련된 대표적인 직업과 진로 정보를 제공
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
    
  )
}
