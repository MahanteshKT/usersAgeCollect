import React from 'react'
import Button from '../Button'
import styles from './WarningDiv.module.css'



function WarningDiv(props) {
  const oncancelHandle=()=>{
    props.onCancelHandler();
    console.log("dfsd")
  }
  
  return (
    <div className={styles.warningContainer}>
        
        <div className={styles.warningDiv}>
            <div className={styles.warningHeader}>
              <p>Invalid Input</p>
            </div> 
          <p className={styles.warningText}>{props.msg}</p>
          <Button onClick={props.onCancelHandler} className={styles.buttonCancel}> Cancel</Button>
        </div>
        
    </div>
  )
}

export default WarningDiv
