import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [bmi, setBmi] = useState("")

  const imgcs = {
    height: "400px",
    width: "auto",
    marginLeft: '50px',
    marginTop: '100px',
    borderRadius: '7px',
    border: "7px solid skyblue"
  }
  const formcs = {
    marginLeft: '50px',
    marginTop: '50px',
  }
  const headcs = {
    color: "black",
    fontFamily: 'Trebuchet MS, sans-serif',
  }
  const calculateBMI = (e) => {
    e.preventDefault()  // prevent the whole page from refreshing

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height,weight and gender")
      return //to stop executing rest of the code
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2)
    setBmi(bmiValue)

    if (bmiValue <= 18.5) {
      toast.warning("You are underweight.Consider taking proper diet")
    }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight.Keep maintaining a healthy lifestyle!")
    }
    else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.success("You are overweight.Consider taking proper diet")
    }
    else {
      toast.error("You are in the obese range.It is recommended to seek advice from a healthcare specialist")
    }
  }
  return (
    <section className="bmi">
      <h1 style={headcs}>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form style={formcs} onSubmit={calculateBMI}>
            <div>
              <label>Height(cm)</label>
              <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} required />
            </div>
            <div>
              <label>Weight(kg)</label>
              <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img style={imgcs} src="/bmi.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
