import React, { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the form data in submittedData state
    setSubmittedData(inputs);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
            />
            </label>
            <label>Enter your age:
            <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Username: {submittedData.username}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default MyForm;
