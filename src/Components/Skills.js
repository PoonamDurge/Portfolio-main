import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaCss3, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiHtml5} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        CSS: <FaCss3/>,
        HTML: <DiHtml5/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
