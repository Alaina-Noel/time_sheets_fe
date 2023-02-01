import React, { useState } from 'react';
import './NewEntryForm.css';

function NewEntryForm({ entries }) {
  const [formData, setFormData] = useState({
    project_code: '',
    billable: false,
    hours: '',
    first_name: '',
    last_name: '',
    billable_rate: '',
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
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill out all fields before submitting the form.');
        return;
      }
    }
    try {
      const payload = { timesheet: { ...formData } };
      const response = await fetch('http://localhost:5000/api/v1/timesheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      alert('Form submitted successfully!');
      window.location.reload();
    } catch (error) {
      console.error(error);
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
            <option defaultValue="Choose a project" > Choose a project</option>
            {entries.map((entry) => <option key={entry.id} value={entry.id}>{entry.project_name}</option>)}
          </select>
        </label>
        <br />
        <label>
          Billable:
          <input
            className="billable"
            type="checkbox"
            name="billable"
            checked={formData.billable}
            onChange={() => setFormData({ ...formData, billable: !formData.billable })}
          />
        </label>
        <br />
        <label>
          Hours:
          <input type="number" name="hours" value={formData.hours} onChange={handleChange} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Billable Rate:
          <input type="number" name="billable_rate" value={formData.billable_rate} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewEntryForm;
