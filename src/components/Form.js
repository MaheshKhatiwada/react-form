import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    board:"",
    college:"",
    gpa:"",
    company:"",
    role:"",
    years:"",
    education:[],
    experience:[],
  });
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //education.push()
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
        <h6 className="mt-2"> Education Details</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Board</th>
              <th scope="col">College</th>
              <th scope="col">GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><input type="text" name="board" value={formData.board} onChange={handleFormData} placeholder="Board" /></td>
              <td><input type="text" name="college" value={formData.college} onChange={handleFormData} placeholder="College" /></td>
              <td><input type="number" name="gpa" value={formData.gpa} onChange={handleFormData} placeholder="GPA" /></td>
            </tr>
          </tbody>
        </table>
        <h6 className="mt-2"> Experience</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
              <th scope="col">Years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><input type="text" name="company" value={formData.company} onChange={handleFormData} placeholder="Company" /></td>
              <td><input type="text" name="role" value={formData.role} onChange={handleFormData} placeholder="Role" /></td>
              <td><input type="number" name="years" value={formData.years} onChange={handleFormData} placeholder="Years" /></td>

            </tr>
          </tbody>
        </table>


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
