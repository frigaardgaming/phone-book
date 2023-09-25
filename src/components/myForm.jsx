import React, { useState } from "react";

export default function MyForm() {
  const [inputs, setInputs] = useState({});
  const [contacts, setContacts] = useState([]); //! Til at gemme kontakter
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //! Opret en ny kontakt ved hjælp af formdata
    const newContact = { ...inputs };
    //! Tilføj den nye kontakt til kontakter-listen
    setContacts([...contacts, newContact]);
    //! Tøm formdata
    setInputs({});
    //! Opdater submittedData med den senest oprettede kontakt
    setSubmittedData(newContact);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Fornavn:
          <input 
            type="text" 
            name="firstname" 
            value={inputs.firstname || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Efternavn:
          <input 
            type="text" 
            name="lastname" 
            value={inputs.lastname || ""} 
            onChange={handleChange}
          />
        </label>
        <label>E-mail:
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Telefon:
          <input 
            type="tel" 
            name="phone" 
            value={inputs.phone || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Firma:
          <input 
            type="text" 
            name="firm" 
            value={inputs.firm || ""} 
            onChange={handleChange}
          />
        </label>
        <label>Stilling:
          <input 
            type="text" 
            name="position" 
            value={inputs.position || ""} 
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>

      {submittedData && (
        <div className="submittedData">
          <h2>Indsendt Data:</h2>
          <p>Fornavn: {submittedData.firstname}</p>
          <p>Efternavn: {submittedData.lastname}</p>
          <p>E-mail: {submittedData.email}</p>
          <p>Telefon: {submittedData.phone}</p>
          <p>Firma: {submittedData.firm}</p>
          <p>Position: {submittedData.position}</p>
        </div>
      )}

      <h2>Kontakter:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstname} {contact.lastname}
            <br />
            {contact.email} - +45 {contact.phone}
            <br/>
            {contact.firm} - {contact.position}
          </li>
        ))}
      </ul>
    </div>
  );
}
