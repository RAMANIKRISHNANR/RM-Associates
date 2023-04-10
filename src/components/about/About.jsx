import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p><span>W</span>e Started our journey in a passionate manner with a motive of constructing a high quality buildings and provide good service at the customers door step.</p>
            <p><span>W</span>e step-by-step achieving that with our family[client] support and providing more feasible needs beyond your exceptation.</p>

          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='3' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
