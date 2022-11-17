function Navbar(){
return `<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse  navbar-collapse justify-content-center" id="navbarTogglerDemo02">
    <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
      <li class="nav-item  ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Privacy Policy</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`;
}
export {Navbar};