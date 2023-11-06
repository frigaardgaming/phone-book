import { useEffect, useState } from "react";
import ContactBox from "./ContactBox";
import AddPip from "./AddPip";

export default function MainContent() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaW1zZ3pneGFoaGx0cGJ2d2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzc3NTAsImV4cCI6MjAxNDg1Mzc1MH0.bR_zj_y7vzf7fvsW-N-6126mAyKquznFzvDur-m-_mw'
    const data = await fetch ('https://wbimsgzgxahhltpbvwlu.supabase.co/rest/v1/contactlist?select=*', {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      }
    }).then(response => response.json())

    setContacts(data);
  }

  useEffect(() => {
    getContacts();
  }, []);

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
