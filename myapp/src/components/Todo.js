import React from "react";
import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModel ,setShowModel] = useState(false);

  function deleteHandler() {
    setShowModel(true);
  }
  function backtoHome(){
    setShowModel(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>

      <div>
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {showModel && <Modal onCancel={backtoHome} onConfirm={backtoHome} />}
      {showModel && <Backdrop onCancel={backtoHome} />}
      
 
    </div>
  );
}

export default Todo;
