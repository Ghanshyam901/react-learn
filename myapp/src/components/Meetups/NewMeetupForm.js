import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleinputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enterTitle = titleinputRef.current.value;
    const enterImage = imageInputRef.current.value;
    const enterAddress = addressInputRef.current.value;
    const enterDescription = descriptionInputRef.current.value;

    const meetUpData ={
        title : enterTitle,
        image : enterImage,
        address : enterAddress,
      description : enterDescription
    };
    // console.log(meetUpData);

    props.onAddMeetup(meetUpData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Meetup title</label>
          <input type="text" required id="title" ref={titleinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Meetup address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
