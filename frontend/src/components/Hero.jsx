import React from 'react';

const Hero = () => {
  const textform = {
    fontFamily: 'Georgia, serif',
    color: 'white',
  };
  const spanstyle = {
    fontFamily: 'Georgia, serif',
    color: 'orange',
  };
  const titleStyle = {
    fontSize: '80px',
    color: 'pink',
  };

  const goalStyle = {
    fontSize: '80px',
    color: 'green',
  };

  const buttonStyle = {
    fontFamily: 'Georgia, serif',
    fontSize: '20px',
    backgroundColor: '#024950',
    color: '#AFDDE5',
    padding: '12px 24px',
    borderRadius: '6px',
    margin: '8px',
    cursor: 'pointer',
    border: '2px solid black',
    outline: 'none',
  };

  return (
    <section className='hero'>
      <div className="content">
        <div className="title">
          <h1 style={titleStyle}>Conquer</h1>
          <h1 style={titleStyle}>Your</h1>
          <h1 style={goalStyle}>Goals.</h1>
        </div>
        <div className="sub-title">
          <p style={textform}>Your Journey to Fitness Starts <span style={spanstyle}>Here!</span> </p>
        </div>
        <br />
        <div className="buttons">
          <button style={buttonStyle}>Start Your Journey</button>
          <button style={buttonStyle}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
