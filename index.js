import {Navbar} from "./Component/Navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=Navbar();

const ajv=  async ()=>{
try{
    let res = await fetch(`http://localhost:3000/products
`);
let data = await res.json();
append(data);
}catch(e){
    console.log(e);
}
}
ajv();
const append = (data)=>{
console.log(data)
}