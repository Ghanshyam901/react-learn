import React from "react";
import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/Meetups/NewMeetupForm.js";

function NewMeetup() {

const history = useNavigate();

  function addMeetupHandler(meetUpData) {
    fetch("https://meetingapp901-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers :{
        "Content-type":"application/json"
      }
    }
    
    ).then(()=>{
      history('/');
    });
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
