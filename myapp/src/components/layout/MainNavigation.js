import React from "react";
import classes from './MainNavigation.module.css';
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">all meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">add new meetup</Link>
          </li>
          <li>
            <Link to="/favourate">Favourate meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
