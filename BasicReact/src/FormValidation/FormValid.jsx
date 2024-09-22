import React, { useState } from "react";
import "./Form.css";
const FormValid = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  function ValidationFunction() {
    const error = {};
    if (!name) {
      error.name = "Name is required";
    }

    if (!email) {
      error.email = "Email is required";
    }
    if (!password) {
      error.password = "Password is required";
    }
    if (password.length < 6) {
      error.password = "Password mast be 6 digit";
    }

    if (confirmPassword.length < 6) {
      error.password = "Password mast be 6 digit";
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password should be same");
    }
    if (!age) {
      error.age = "Age is required";
    } else if (isNaN(age) || age < 18) {
      error.age = "Age must be a number and at least 18";
    }

    if (!gender) {
      error.gender = "Gender is required";
    }
    return error;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const ValidationErrors = ValidationFunction();
    if (Object.keys(ValidationErrors).length > 0) {
      setError(ValidationErrors);
    } else {
      console.log("Form Submitted");
    }
  }

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="Inputs">
          <label className="label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <div className="error">{error.name}</div>}
        </div>
        <div className="Inputs">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <div className="error">{error.email}</div>}
        </div>
        <div className="Inputs">
          <label className="label">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {error.age && <div className="error">{error.age}</div>}
        </div>
        <div className="Inputs">
          <label className="label">password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <div className="error">{error.password}</div>}
        </div>
        <div className="Inputs">
          <label className="label">Confirm Password:</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error.confirmPassword && (
            <div className="error">{error.confirmPassword}</div>
          )}
        </div>
        <div className="Inputs">
          <label className="label">Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {error.gender && <div className="error">{error.gender}</div>}
        </div>
        <div className="Inputs">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormValid;
