import React from 'react'
import "./styles/Hero.scss"
const Hero = () => {
  return (
    <div className='inner hero-inner'>
      <h1 className="tit">
        <span>
          front
        </span>
        <span>
          developer
          {/* back <span className="star-spin"><i className="star">✱</i></span> front */}
        </span>
        <span>
          back
        </span>
      </h1>
      <p className="txt">
        프런트엔드와 백엔드을 모두 이해하며 <br/>
        사용자 경험과 안정적인 서버 구조를 함께 고민하는<br/>
        성장과 도전을 하는 개발자 <br/>
      </p>
      <div className="arrow">
        ⬇
      </div>
    </div>
  )
}

export default Hero