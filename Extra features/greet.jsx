import React from 'react';

function Heading() {
let currentDate = new Date();
let curDate = currentDate.getHours();
var greeting = '';
let cssColor = {};
let greet = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '250px auto', 
    width: '500px',
    height: '50px',
    borderRadius: '25px',
    backgroundColor: '#fab1a0' 
}
if(curDate>=5 && curDate <=12){
    greeting = 'Good Morning';
    cssColor.color = "#e74c3c";
}
else if(curDate >12 && curDate<=17){
    greeting = 'Good Afternoon';
    cssColor.color = "#27ae60";
}
else if (curDate>18 && curDate<=21){
    greeting = 'Good Evening';
    cssColor.color = "#3498db";
}
else{
    greeting = 'Good Night';
    cssColor.color = "#8e44ad";
}
return(<>
<div style= {greet}>
<h1>Asalam Alaikum <span style = {cssColor}>{greeting}</span></h1>
</div></>)
}

export default Heading;