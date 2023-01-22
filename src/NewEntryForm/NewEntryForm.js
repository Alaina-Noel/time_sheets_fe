import React, { useState } from "react";
import './NewEntryForm.css';

const NewEntryForm = () => {
  const [formData, setFormData] = useState({
    project_code: "",
    billable: false,
    hours: "",
    first_name: "",
    last_name: "",
    billable_rate: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'project_name') {
      setFormData({ ...formData, project_code: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isFormValid = true;
    for (const key in formData) {
      if (!formData[key]) {
        isFormValid = false;
        break;
      }
    }
    if (isFormValid) {
    try {
        const payload = {
            "timesheet": {
                "project_code": formData.project_code,
                "billable": formData.billable,
                "hours": formData.hours,
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "billable_rate": formData.billable_rate
            }
        }
        const response = await fetch("http://localhost:5000/api/v1/timesheets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        alert("Form submitted successfully!");
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
  } else {
    alert("Please fill out all fields before submitting the form.");
  }
};

  return (
    <div className="entry-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <select
            name="project_name"
            value={formData.project_code}
            onChange={handleChange}
          >
            <option value="RD001">Ethereum</option>
            <option value="DV002">Pharos</option>
            <option value="GM001">Business Development</option>
            <option value="GM005">Conference/Training</option>
            <option value="GM006">Team Development (Non-Training)</option>
            <option value="GM002">Admin/Legal</option>
            <option value="GM003">Paid Time Off</option>
            <option value="TM001">Roonder 3.0</option>
            <option value="Audosis003 ">Project Wildfire</option>
            <option value="FSG03">Google Drive Integration</option>
            <option value="DV002">React Native</option>
            <option value="DV002">Training</option>
            <option value="DV002">Watchlist Demo</option>
            <option value="DV002">Recruiting</option>
          </select>
        </label>        
        <br />
        <label>
          Billable:
          <input
            type="checkbox"
            name="billable"
            checked={formData.billable}
            onChange={() => setFormData({ ...formData, billable: !formData.billable })}
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Billable Rate:
          <input
            type="number"
            name="billable_rate"
            value={formData.billable_rate}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

  export default NewEntryForm;