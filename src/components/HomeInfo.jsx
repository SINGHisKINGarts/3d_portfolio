import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const InfoBox = ({text ,link,btnText})=> (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">👋Hi, I am <span className="font-bold">Mandeep Singh</span> <br />A 2nd yr CS student at IIIT Delhi</h1>
    ),
    2:(
        <h1><InfoBox
            text="I am a passionate developer with a keen interest in competitive programming and web development. I love exploring new technologies and creating innovative solutions."
            link="/about"
            btnText="Learn More"

        />
        </h1>
    ),
    3:(
        <h1><InfoBox
            text= "Welcome to my portfolio! Here, you can explore my projects and learn more about my skills and experiences. I hope you find something that inspires you!"
            link="/projects"
            btnText="Learn More"

        />
        </h1>
    ),
    4:(
        <h1><InfoBox
            text={"I am always open to new opportunities and collaborations. If you would like to get in touch, feel free to reach out! Let's connect and create something amazing together!"}
            link="/contact"
            btnText="Lets Connect"

        />
        </h1>
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
