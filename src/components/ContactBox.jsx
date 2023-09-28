import React from "react";

export default function ContactBox({ contact }) {
  return (
    <div className="contacts">
      <ul>
        <li>
          <p><span className="subtitle">First Name:</span> {contact.firstname}</p>
          <p><span className="subtitle">Last Name:</span> {contact.lastname}</p>
          <p><span className="subtitle">Email:</span> {contact.email}</p>
          <p><span className="subtitle">Phone:</span> {contact.phone}</p>
          <p><span className="subtitle">Company:</span> {contact.company}</p>
          <p><span className="subtitle">Position:</span> {contact.position}</p>
        </li>
      </ul>
    </div>
  );
}
