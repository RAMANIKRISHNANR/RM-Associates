import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='projects' subtitle='Have a look where we created the dream come true.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
