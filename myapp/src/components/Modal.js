import React from 'react'

function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }
    function conformHandler(){
        props.onConfirm();
    }


  return (
    <div className='modal'>
        <p>are you sure want to delete .?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn'onClick={conformHandler} >conform .</button>
    </div>
  )
}

export default Modal