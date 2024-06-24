import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Poonam Durge</h4>
      <h4>Copyright &copy; 2024 PD</h4>
      <div className='footerLinks'>
        <a href="https://github.com/PoonamDurge" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/poonam-durge-173a071a2" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:poonamdurge45@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer