import React, { useState } from 'react'
import Button from '../../UI/Button'
import WarningDiv from '../../UI/WarningDiv/WarningDiv';
import Card from '../../UI/Card';
import "./UserInput.css"

const  UsersInput=(props)=>{
    const usersInp={
        username:'',
        age:''
    }
    const [userInput,setUserInput]=useState(usersInp)
    const [msg,setMsg]=useState("");
    const onChangeHandler=(input,value)=>{
        setUserInput({
            ...userInput,
            [input]:value,
        })
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();

        if(userInput.username===""||userInput.age===""){
            setMsg("username and age input fields must be filled!.");
            return;
        }
        if(userInput.age<=0){
            setMsg("User Age must be greater than zero(>0)!.");  
            return;
        }

        props.SendUserInput({
            ...userInput,
            id:Math.random().toString(),
        });

        setMsg("");
        setUserInput(usersInp);
        
    }

    const onCancelHandler=()=>{
        setMsg("");
        console.log("wde")
        return;
    }
    return (
    <div style={{width:'100%'}} >
        {msg!=""?<WarningDiv msg={msg} onCancelHandler={onCancelHandler}/>:""}
        <form className='inputForm' onSubmit={onSubmitHandler}>
            <div className='input-each'>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username"
                        value={userInput.username}
                        onChange={(e)=>onChangeHandler('username',e.target.value)}

                />
            </div>
            <div className='input-each'>
                <label htmlFor="age">Age(years):</label>
                <input type="number" name="age" id="age" 
                        value={userInput.age}
                        onChange={(e)=>onChangeHandler('age',e.target.value)}
                />
            </div>
            <Button className="button">
                    Add User
            </Button>
        </form>
    </div>
  )
}

export default UsersInput
