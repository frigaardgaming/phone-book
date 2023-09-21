import React, { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [contacts, setContacts] = useState([]); // Til at gemme kontakter
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Opret en ny kontakt ved hjælp af formdata
    const newContact = { ...inputs };
    // Tilføj den nye kontakt til kontakter-listen
    setContacts([...contacts, newContact]);
    // Tøm formdata
    setInputs({});
    // Opdater submittedData med den senest oprettede kontakt
    setSubmittedData(newContact);
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

      <h2>Contacts:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            Username: {contact.username}, Age: {contact.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyForm;
