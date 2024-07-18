import React from "react";

const WorkoutSessions = () => {
  const imgdesign = {
    borderRadius: '10px',
    width: '550px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginLeft: '59px',
    marginTop: '20px'
  }
  const paradesign = {
    color: '#C5C6C7',
    fontFamily: 'Garamond, serif'
  }
  const headdesign = {
    color: "#66FCF1",
    fontFamily: 'Trebuchet MS, sans-serif',
    textAlign: 'center'
  }
  const sectionStyle = {
    backgroundColor: '#0B0C10',
    padding: '20px', // Optional: add some padding for better spacing
  }
  const wrapperStyle = {
    marginBottom: '20px', // Optional: add some margin between sections
    marginTop: '35px'
  }

  return (
    <section className="workout_session" style={sectionStyle}>
      <div className="wrapper" style={wrapperStyle}>
        <img style={imgdesign} src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper" style={wrapperStyle}>
        <h1 style={headdesign}>FEATURED BOOTCAMPS</h1>
        <p style={paradesign}>
          Discover our premier Cardio Blast Bootcamp, where heart-pumping workouts ignite your fitness journey. Join us for dynamic sessions designed to boost endurance, torch calories, and achieve your peak fitness goals.
        </p>
        <br />
        <div className="bootcamps">
          <div>
            <h4 style={headdesign}>Total Body Transformation Bootcamp</h4>
            <p style={paradesign}>
              Transform your physique with our Total Body Transformation Bootcamp, combining intense workouts and expert guidance to sculpt muscles and boost endurance.
            </p>
          </div>
          <div>
            <h4 style={headdesign}>Cardio Fitness Bootcamp</h4>
            <p style={paradesign}>
              Elevate your cardio fitness with our Cardio Fitness Bootcamp, featuring high-energy sessions that improve heart health and burn calories effectively.
            </p>
          </div>
          <div>
            <h4 style={headdesign}>Strength Training Bootcamp</h4>
            <p style={paradesign}>
              Build strength and tone muscles in our Strength Training Bootcamp, tailored for all fitness levels to enhance power and functional fitness.
            </p>
          </div>
          {/* <div>
            <h4 style={headdesign}>TOP WORKOUT SESSION</h4>
            <p style={paradesign}>
              Discover our premier fitness sessions designed to elevate your workout experience. From high-energy cardio to targeted strength training, our diverse classes cater to every fitness goal, ensuring you reach new heights in health and wellness.
            </p>
          </div> */}
          <div>
            <h4 style={headdesign}>Functional Fitness Bootcamp</h4>
            <p style={paradesign}>
              Enhance everyday movements with our Functional Fitness Bootcamp, focusing on agility, balance, and core strength for optimal physical performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
