import { useState } from "react";
import ContactBox from "./ContactBox";
import AddPip from "./AddPip";

export default function MainContent() {
  const [contacts, setContacts] = useState([]);


  return (
    <main>
      <div className="list">
        <div className="add-container">
          
          <AddPip contacts={contacts} setContacts={setContacts}/>
        </div>
        <h1 className="contactlist-header">Contactlist</h1>
        {contacts.map((contact, index) => {
            return <ContactBox key={index} contact={contact} />;
        })}
      </div>
    </main>
  );
}
