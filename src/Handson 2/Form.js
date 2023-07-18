import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [Fstate, setFstate] = useState({
    Name: "",
    Dept: "",
    Rat: "",
    EmpData: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // console.log(value);
    setFstate({ ...Fstate, [name]: value });
  };

  const buttonFunc = (event) => {
    event.preventDefault();
    const saveData = {
      name: Fstate.Name,
      department: Fstate.Dept,
      rating: Fstate.Rat,
    };
    Fstate.EmpData.push(saveData);
    setFstate({ EmpData: Fstate.EmpData });
  };

  return (
    <div>
      <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
      <form className="form">
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          placeholder="Enter Your Name"
          type="text"
          name="Name"
          onChange={handleOnChange}
          value={Fstate.Name}
          required
        />

        <br />

        <label htmlFor="dept">Department :</label>
        <input
          id="dept"
          placeholder="Enter Your Dept"
          type="text"
          name="Dept"
          onChange={handleOnChange}
          value={Fstate.Dept}
          required
        />

        <br />

        <label htmlFor="rat">Rating :</label>
        <input
          id="rat"
          placeholder="Enter Rating"
          type="number"
          required
          name="Rat"
          onChange={handleOnChange}
          value={Fstate.Rat}
        />

        <br />

        <button type="submit" onClick={buttonFunc}>
          Submit
        </button>
      </form>

      <div className="dataBox">
        {Fstate.EmpData.map((item, index) => {
          return (
            <div key={index} className="displayBox">
              <span>Name: {item.name} || </span>
              <span>Department: {item.department} || </span>
              <span>Rating: {item.rating}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
