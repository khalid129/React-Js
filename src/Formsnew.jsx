import React , {useState} from "react";

const Formsnew = ()=>{
 const [name,setName] = useState({
     fname:"",
     lname:"",
     email:""
 });

//  Hard Code Method
//  const inputEvent = (event)=>{
//     const {name,value}=event.target;
//     setName((preValue)=>{
//         if (name=="fname"){
//             return{
//                 fname:value,
//                 lname:preValue.lname,
//                 email:preValue.email,
//             }
//         }
//         else if (name=="lname"){
//             return{
//                 fname:preValue.fname,
//                 lname:value,
//                 email:preValue.email,
//             }
//         }
//         if (name=="email"){
//             return{
//                 fname:preValue.fname,
//                 lname:preValue.lname,
//                 email:value,
//             }
//         }
//     })
//  }

const inputEvent = (event)=>{
    const {name,value}=event.target;
    setName((preValue)=>{
        return{
            ...preValue,
            [name]:value,
        }
    })
}
 const submit = (event)=>{
    event.preDefault();
 }


    return(<>
        <form action="" onSubmit={submit}>
            <h1>Hello {name.fname} {name.lname} {name.email}</h1>
            <input type="text" placeholder="Enter your first name" name="fname" value={name.fname} onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder="Enter your last name" name="lname" value={name.lname} onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder = "Enter your email" name="email" value={name.email} onChange={inputEvent}/>
            <button>Submit</button>
        </form>
    </>)
}
export default Formsnew;