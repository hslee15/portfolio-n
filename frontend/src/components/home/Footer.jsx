import React from 'react'
import footer from '../../utils/footer'
import {FaGithub} from "react-icons/fa"
import {SiNotion} from "react-icons/si"
import "./styles/Footer.scss"

const Footer = () => {
  return (
    <div className='inner foot-inner'>
      <div className="left">
        <div className='logo'>LOGO</div>
        <p>@ 2025 DECODE.Lab. All rights reserved.</p>
      </div>
      <div className="right">
        <a href="">
          <FaGithub size={28}/>
        </a>
        <a href="">
          <SiNotion size={28}/>
        </a>
      </div>
    </div>
  )
}

export default Footer