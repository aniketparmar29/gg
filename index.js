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
        if(el.category==="Airpods"){
            let divm = document.createElement("div");
            divm.className="cover gap-4 d-flex" ;
            let divs = document.createElement("div");
            divs.className="box-container pb-4" ;
            let divb = document.createElement("div");
            divb.className="box w-100 shadow-sm " ;
            divm.addEventListener("click",function(){
                localStorage.setItem("product",JSON.stringify(el))
                window.location.href="singleproduct.html"
            });
            let title = document.createElement("h3");
            title.innerText = el.title;
            let img = document.createElement("img");
            img.style.width='200px';
            img.src=el.images[4];
            let price = document.createElement("p");
            price.innerText=el.price;
            let buy = document.createElement("button");
            buy.innerText="Buy Now";
            buy.className="btn btn-warning";
            divb.append(img,title,img,price,buy);
            divs.append(divb);
            divm.append(divs);
            con.append(divm)
        }
    });
}

