import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";

import { showErrorMessage } from "../common/messages";

const Formm = () => {
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    education: [{ board: "", college: "", gpa: "" }],
    experience: [{ company: "", role: "", years: "" }],
  });
  const [errors, setErrors] = useState("");
  const { name, dob, email,education,experience} = data;
  const handleFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };
  const handleFormEducationData=(e,idx)=>{
    console.log(idx,e.target.name)
    const values=[...data.education];
    values[idx][e.target.name]=e.target.value;
    setData({...data,education:values})

  }
  const handleFormExperienceData=(e,idx)=>{

    console.log(idx,e.target.name)
    const values=[...data.experience];
    values[idx][e.target.name]=e.target.value;
    setData({...data,experience:values})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(dob) ||
      isEmpty(email)

    ) {
      setErrors("All fields required");
    } else if (!isEmail(email)) {
      setErrors("Email must be valid");
    } else if (!isDate(dob)) {
      setErrors("Date of Birth must be valid");
    } else {
      //success
      //Send to backend
      console.log("Data is ", data);
    }
  };
  const handleAddEducation=()=>{
      setData({...data,education:[...education,{ board: "", college: "", gpa: "" }]})
  }
  const handleAddExperience=()=>{
      setData({...data,experience:[...experience,{ company: "", role: "", years: "" }]})
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} noValidate>
        <h1 className="text-center">Register</h1>
        {errors && showErrorMessage(errors)}
        <div className="mt-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
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
            value={data.email}
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
            value={data.dob}
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
                {data.education.map((eds,idx)=>{
                    return(
                        <>
                        <tr>
                        <th scope="row"><button className="btn btn-secondary" onClick={handleAddEducation}>Add </button></th>
                        <td>
                        <input
                          type="text"
                          name="board"
                          value={eds.board}
                          onChange={(e)=>handleFormEducationData(e,idx)}
                          placeholder="Board"
                        />
                      </td>
                      <td>

                <input
                  type="text"
                  name="college"
                  value={eds.college}
                  onChange={(e)=>handleFormEducationData(e,idx)}
                  placeholder="College"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="gpa"
                  value={eds.gpa}
                  onChange={(e)=>handleFormEducationData(e,idx)}
                  placeholder="GPA"
                />
              </td>
              </tr>
                </>
                    )
                })}
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
          {data.experience.map((exp,idx)=>{
                    return(
                        <>
                        <tr>
                        <th scope="row"><button className="btn btn-secondary" onClick={handleAddExperience}>Add </button></th>
                        <td>
                        <input
                          type="text"
                          name="company"
                          value={exp.company}
                          onChange={(e)=>handleFormExperienceData(e,idx)}
                          placeholder="Company"
                        />
                      </td>
                      <td>

                <input
                  type="text"
                  name="role"
                  value={exp.role}
                  onChange={(e)=>handleFormExperienceData(e,idx)}
                  placeholder="Role"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="years"
                  value={exp.years}
                  onChange={(e)=>handleFormExperienceData(e,idx)}
                  placeholder="years"
                />
              </td>
              </tr>
                </>
                    )
                })}
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

export default Formm;
