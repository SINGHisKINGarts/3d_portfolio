import React from 'react'
import {projects } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My<span className="blue-gradient_text font-semibold drop-shadow-sm"> Projects</span>

      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>These projects showcase my ability to translate theoretical knowledge into real-world applications. They cover a range of domains, including game development, web systems, and human-computer interaction, using languages like Java and Python.</p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex items-center justify-center bg-slate-100 shadow-md">
                <img src={project.iconUrl} alt="Project Icon" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
                </h4>

              <p className="mt-2 text-slate-500">{project.description}</p>

              <div className="">
                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">
                Live Link 🡲
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-400"/>
      <CTA />
      </section>
  )
}

export default Projects
