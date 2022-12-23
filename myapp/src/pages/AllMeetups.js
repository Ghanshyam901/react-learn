import React from "react";
import MeetupList from "../components/Meetups/MeetupList";
import { useState,useEffect } from "react";

function AllMeetups() {
  const [loading, setLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setLoading(true);

    fetch("https://meetingapp901-default-rtdb.firebaseio.com/meetups.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const meetups = [];
      for(const key in data){
        const meetup = {
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);

  if (loading) {
    return (
      <section>
        <p>loading......</p>
      </section>
    );
  }

  return (
    <section>
      <h1>all Meetups</h1>
   
        <MeetupList meetups={loadedMeetups} />
    
    </section>
  );
}

export default AllMeetups;
