import {Navbar} from "./Component/Navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=Navbar();

const ajv=  async ()=>{
try{
    let res = await fetch(`http://localhost:3000/products
`);
let data = await res.json();
Append(data);
}catch(e){
    console.log(e);
}
}
ajv();
const Append = (data)=>{
    let con = document.getElementById("procon");
    con.innerHTML="";
    data.map((el)=>{
        if(el.category==="Bluetooth Headphone"){
            let div = document.createElement("div");
            div.className="d-flex gap-5" ;
            div.style.color='black';
            div.style.justifyContent='center';
            div.addEventListener("click",function(){
                let data=JSON.parse(localStorage.getItem("product"))||[]
                data.push(el)
                localStorage.setItem("product",JSON.stringify(data))
                window.location.href="singleproduct.html"
            });
            let title = document.createElement("h4");
            title.innerText = el.title;
            let img = document.createElement("img");
            img.style.tabSize='300px';
            img.src=el.images[5];
            let price = document.createElement("p");
            price.innerText=el.price;
            let buy = document.createElement("button");
            buy.innerText="Buy Now";
            div.append(img,title,img,price,buy);
            con.append(div)
        }
    });
}

