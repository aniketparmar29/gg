function Navbar(){
return ` <nav class="navbar bg-white shadow-sm sticky-top  mx-auto   navbar-expand-lg bg-light">
<div class="container-fluid  ps-5">
  <a class="navbar-brand" href="#">GG</a>
  <img src="./Assets/Icone-ecommerce.png" alt="">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse align navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo02">
    <ul class="navbar-nav sky pointer-event  mx-auto  mb-2 mb-lg-0">
      <li class="nav-item  ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item  ">
        <a class="nav-link " href="./shop.html">products</a>
      </li>
      <li class="nav-item  ">
        <a class="nav-link " href="#">About</a>
      </li>
      <li class="nav-item  ">
        <a class="nav-link " href="#">Cart</a>
      </li>



    </ul>
    <i class="fa fa-cart-plus pe-3 ico" aria-hidden="true"></i>
    <form class="d-flex ">
      <a class=" btn btn-dark me-4" href="./login/Signin.html">Log in</a>
      <a class=" btn btn-outline-dark" href="./login/Signup.html">Signup</a>

    </form>
  </div>
</div>
</nav>
`;
}
export {Navbar};