import React from 'react';
import Contact from './Contact';

function ContactList(){
  const theData = [
    {
      firstName: 'Angel',
      lastName: 'Lopez',
      phoneNumber: '000-100-2000'
    },
    {
      firstName: 'Mike',
      lastName: 'Vento',
      phoneNumber:'828-557-2999'
    },
    {
      firstName: 'Thomas',
      lastName: 'Bradbury',
      phoneNumber: '000-000-0000'
    }
  ];
  const contactArray = theData.map(function(contact, i){
    const { firstName, lastName, phoneNumber } = contact;
    return (<li key={i}><Contact firstName={firstName} lastName={lastName} phoneNumber={phoneNumber}/></li>);
  });

  return(
    <ul className="contact-sentence">{contactArray}</ul>
  )
}
export default ContactList;


