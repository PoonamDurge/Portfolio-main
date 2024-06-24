import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Poonam Durge</b> and I am from Pune, India. <br></br>
            Welcome to my portfolio! I am a passionate and skilled MERN <b>(MongoDB, Express.js, React, Node.js) </b>
            Stack  Developer with a strong foundation <br></br>in full-stack web development. 
            With a keen eye for detail and a drive for excellence, 
            I thrive on creating robust, scalable, and user-friendly applications that solve real-world problems.          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='HTML' /> 
        <Skills skill='CSS' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Github' />
        <Skills skill='Postman' />        
        <Skills skill='Vercel' />
        <Skills skill='Npm' />

      </div>
    </>
  )
}

export default About