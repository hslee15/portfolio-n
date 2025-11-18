import React from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'

const Aboutme = () => {
  const profile=aboutMe.basic
  const skills=aboutMe.skills
  const exper=aboutMe.experiences
  const interest=aboutMe.interests
  return (
    <div className='inner aboutme-inner'>
      <h1 className='tit'>
        <span className='star-spin'>
          <i className='star'>*</i></span>
          aboutMe
      </h1>
      <div className="t-wrap">
        <h2 className="sub-tit">
          profile
        </h2>
        <p className="txt">
          실용적이고 사용자에게 도움이 되는 서비스<br />
          완성도 높은 웹 웹서비스,
          <br /> 클라이언트와 서버 모두에서 안정적이고 자연스럽게
        </p>
      </div>
      <div className="about-container">
        <div className="in-wrap profile-wrap">
          <h4 className='list-lst'>profile</h4>
          <ul className="lst">
            <li>
            <strong>이름</strong> {profile.name}
            </li>
            <li>
            <strong>나이</strong> {profile.age}
            </li>
            <li>
            <strong>사는곳</strong> {profile.location}
            </li>
            <li>
            <strong>MBTI</strong> {profile.mbti}
            </li>
          </ul>
        </div>
        <div className="in-wrap skills-wrap">
          <h4 className='list-lst'>skills</h4>
          <ul className="lst">
            {skills.map((skill,i)=>(
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="in-wrap exper-wrap">
          <h4 className='list-lst'>experiences</h4>
          <ul className="lst">
            {exper.map((exp,i)=>(
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
        <div className="in-wrap interests-wrap">
          <h4 className='list-lst'>interests</h4>
          <ul className="lst">
            {interest.map((int,i)=>(
              <li key={i}>{int}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
