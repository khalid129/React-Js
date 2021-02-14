function add(a, b) {
    let sum = a + b;
    return (<p>Addition of two variable is {sum}</p>);
}
function sub(a, b) {
    let sub = a - b;
    return (<p>Subtraction of two variable is {sub}</p>);
}
function mul(a, b) {
    let mul = a * b;
    return (<p>Multiplication of two variable is {mul}</p>);
}
function div(a, b) {
    let div = a / b;
    return (<p>Division of two variable is {div.toFixed(2)}</p>);
}
export {add,sub,mul,div};