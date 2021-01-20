import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const name = "Khalid";
var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/250/300";
var img3 = "https://picsum.photos/300/300";

ReactDOM.render(<>
    <h1 className="heading">My name is {name}</h1>
    <div className="img_div">
    <img src={img1} alt="Content is here"/>
    <img src={img2} alt="Content is here"/>
    <img src={img3} alt="Content is here"/>
    </div>
</>
    , document.getElementById("root"));

