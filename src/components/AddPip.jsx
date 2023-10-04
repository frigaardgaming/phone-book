import React, { useState } from 'react'
import AddButton from './addButton';
import { Contacts } from '../entities/pips';
import ReactModal from 'react-modal';

export default function AddContact({contacts, setContacts}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  
  
  const handleAddContact = () => {
    const newContact = new Contacts(firstname, lastname, email, phone, company, position);
    setContacts([...contacts, newContact]);

    // Tømmer input felter
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setCompany("");
    setPosition("");

    handleCloseModal();
  };

  function handleOpenModal() {
    setIsOpen(true);
  };

  function handleCloseModal() {
    setIsOpen(false);
  };


  return (
    
    <div>
      <ReactModal className="modal" isOpen={isOpen}>
        <label className='title'>Create new contact</label>

        <br/>
        <br/>
        <label>Name</label>
        <br />
        <input
            type="text"
            placeholder="Firstname"
            value={firstname}
            onChange={handleFirstnameChange}
            required
        />
        <input
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={handleLastnameChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
        />
        <br />
        <label>Phone</label>
        <br />
        <input
            type="text"
            placeholder="Phonenumber"
            value={phone}
            onChange={handlePhoneChange}
        />
        <br />
        <label>Company</label>
        <br />
        <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={handleCompanyChange}
        />
        <input
            type="text"
            placeholder="Position at company"
            value={position}
            onChange={handlePositionChange}
        />
        <br />
        <br />
        <AddButton buttonText={"Add Contact"} onClick={handleAddContact}></AddButton>
        <AddButton buttonText={"Close"} onClick={handleCloseModal}></AddButton>
      </ReactModal>
      <AddButton buttonText={"Add Contact"} onClick={handleOpenModal}></AddButton>
    </div>
  )
}
