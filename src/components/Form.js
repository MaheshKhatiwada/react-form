import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
  });
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form data is ", formData);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center">Register</h1>
        <div className="mt-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleFormData}
            required
          />
        </div>


        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
