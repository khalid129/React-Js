import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<React.Fragment>
    <h1>City Name</h1>
    <ul>
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Islamabad</li>
    </ul>
</React.Fragment>, document.getElementById('root'))


// Alternative of React Element

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);

// PAss more than one element

// [
//     <h1>City Name</h1>,
//     <ul>
//         <li>Karachi</li>
//         <li>Lahore</li>
//         <li>Islamabad</li>
//     </ul>
// ]