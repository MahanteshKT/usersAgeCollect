import React from 'react'
import Card from '../../UI/Card'
import styles from "./UserList.module.css";
function UserList(props) {
  return (
    
        <div className={styles.users}>
            <ul className={styles.userList}>
                {props.users.map((user)=>{
                    return  <li className={styles.userEach} key={user.id}>
                        <p>{user.username}({user.age} years old)</p>
                    </li>
                })}
            </ul>
        </div>
  )
}

export default UserList
