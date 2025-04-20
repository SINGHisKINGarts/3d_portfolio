import React from 'react'
import { skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am <span className="blue-gradient_text font-semibold drop-shadow-sm">Mandeep Singh</span>

      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>Software Engineer based in delhi,india, specialising in computer science. I have a keen interest in programming and I always look forward to learn new technologies</p>
      </div>
      <div className=" py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-front rounded-xl flex items-center justify-center bg-slate-100 shadow-md">
                <img 
                src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="py-16">
        <h3 className='subhead-text'>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>Although I do not have formal work experience, I have actively worked on several personal and academic projects that showcase my skills and dedication. These projects reflect my ability to learn independently, solve real-world problems, and apply my knowledge practically. Feel free to check them out!</p>
      </div>
      <div className=''>

      </div>
      </div>
      <hr className='border-slate-200'/>
      <div>

      </div>
          <CTA />
    </section>
  )
}

export default About
