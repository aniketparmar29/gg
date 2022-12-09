import {Navbar} from "./Component/Navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=Navbar();


let el=JSON.parse(localStorage.getItem("product"))||{};

function dataavyou(el){
    console.log(el)
    let con =  document.getElementById("product");
            let divm = document.createElement("div");
                divm.className="cover gap-4 d-flex" ;
                let divs = document.createElement("div");
                divs.className="box-container pb-4" ;
                let divb = document.createElement("div");
                divb.className="box w-100 shadow-sm " ;
                let title = document.createElement("h3");
                title.innerText = el.title;
                let img = document.createElement("img");
                img.style.width='300px';
                img.src=el.images[0];
                let price = document.createElement("p");
                price.innerText=el.price;
                let buy = document.createElement("button");
                buy.innerText="Buy Now";
                buy.className="btn btn-warning";
                divb.append(img,title,img,price,buy);
                divs.append(divb);
                divm.append(divs);
                con.append(divm);
}
dataavyou(el);