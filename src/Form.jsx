import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [targetName, setTargetName] = useState();
    const [targetPassword, setTargetPassword] = useState();

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const passwordChange= (event)=>{
        setPassword(event.target.value);
    }

    const changeTargetName = (event) => {
        event.preventDefault();
        setTargetName(name);
        setTargetPassword(password);
    }

    return (<>
        <h1>Hello World {targetName} {targetPassword} </h1>
        <form onSubmit={changeTargetName}>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={nameChange} />
            <input type="text" placeholder="Enter your password" value={password} onChange={passwordChange}/>
            <button type="submit">Click Here</button>
        </form>
    </>)
}

export default Form;