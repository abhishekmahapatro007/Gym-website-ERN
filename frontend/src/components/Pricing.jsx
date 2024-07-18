import { Check } from 'lucide-react'
import React from 'react'
import { Link } from "react-router-dom";

const Pricing = () => {
  const bgcolor = {
    backgroundColor: '#0B0C10',
  }
  const packagegen = {
    color: "indigo",
    fontFamily: 'Trebuchet MS, sans-serif',
  }
  const textgen = {
    color: "skyblue",
    fontFamily: 'Trebuchet MS, sans-serif',
  }
  const spanheading = {
    color: "pink",
    fontFamily: 'Trebuchet MS, sans-serif',
  }
  const linkStyle = {
    display: 'inline-block',
    margin: '0 auto',
    padding: '10px 20px',
    backgroundColor: 'skyblue',
    color: 'white',
    borderRadius: '8px',
    fontFamily: 'Trebuchet MS, sans-serif',
    textAlign: 'center',
    textDecoration: 'none',
  }
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEARLY",
      price: 34000,
      length: 6
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12
    }
  ]
  return (
    <section style={bgcolor} className='pricing'>
      <h1 style={textgen}>FitFusionGym <span style={spanheading}>Plans</span></h1>
      <div className="wrapper">
        {
          pricing.map(element => {
            return (
              <div className="card" key = {element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1 style={textgen}>{element.title}</h1>
                  <h1 style={packagegen}>PACKAGE</h1>
                  <h3 style={textgen}>Rs. {element.price}</h3>
                  <p style={textgen}>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check/> Equipment
                  </p>
                  <p>
                    <Check/> All Day Free Training
                  </p>
                  <p>
                    <Check/> Free Restroom
                  </p>
                  <p>
                    <Check/> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check/> 20 Days Freezing Option
                  </p>
                  <br />
                  <Link to = {"/"} style={linkStyle}>Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing
