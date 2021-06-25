import * as React from "react"
import { Link } from "gatsby"
import reactlogo from '../images/logo-react.svg'
import figmalogo from '../images/logo-figma.svg'
import Card from "./Card"
import Section from "./section"
import Wave from "./Waves"
import Pricing from "./Pricing"
import Footer from "./Footer"

export default function Home() {
    return (
        <>
        <div>
            <div className="Hero">
                <div className="HeroGroup">
                    <h1>It's Time to Make Your Business Standout With Name</h1>
                    <p>This is also Contain Some Tagline</p>
                    <Link to='/page2/'>Learn More</Link>
                    <div className='Logos'>
                        <img src={reactlogo} alt='Logo' width='50' />
                        <img src={figmalogo} alt='Logo' width='50' />
                        <img src={reactlogo} alt='Logo' width='50' />
                        <img src={figmalogo} alt='Logo' width='50' />
                        <img src={reactlogo} alt='Logo' width='50' />
                        <img src={figmalogo} alt='Logo' width='50' />
                    </div>
                   <Wave/>
                </div>
            </div>
            <div className="Cards">

                    <div className="CardGroup">
                    <Card 
                    title="DesignSystem"
                    text="10 sections"
                />
                    <Card 
                    title="React for Designers"
                    text="11 sections"
                   />
                    <Card 
                    title="Sound Design"
                    text="5 sections"
                   />
                    <Card 
                    title="ARKit 2"
                    text="10 sections"
                  />
                </div>
     
            </div>
            <Pricing/>
            <Section
               title="About Me"
               text="Some Description About Me"
            />
         <Footer/>
      
        </div>
        </>
    )
}