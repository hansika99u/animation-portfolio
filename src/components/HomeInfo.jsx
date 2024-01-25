import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText})=>(
    <div className='info-box' >
        <p className='font-medium sm:text-center sm:text-xl' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold' >Hansika</span>👋
        <br/>3<sup>rd</sup> Year Undergraduate at SLIIT.
        </h1>
    ),
    2:(
        <InfoBox
        text='Worked with multiple technologies and picked up many skills along the way.'
        link='/about'
        btnText='Learn more'
        />
    ),
    3:(
        <InfoBox
        text='Various univercity projrcts and personal projects have been completed. Curious about the impact?'
        link='/projects'
        btnText='Visit my portfolio'
        />
    ),
    4:(
        <InfoBox
        text='Loking for dev?'
        link='/contact'
        btnText="Let's tolk."
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
