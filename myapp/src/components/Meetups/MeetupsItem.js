import React from 'react'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupsItem(props) {
  return (
   <li className={classes.item}>
    <Card>
    <div className={classes.image}>
        <img src={props.image} alt=""/>
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button>to Favourate</button>
    </div>
    </Card>
   </li>
  )
}

export default MeetupsItem