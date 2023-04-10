import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Packages We Offer' subtitle='Give the chance and make ourself to join into your family' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
