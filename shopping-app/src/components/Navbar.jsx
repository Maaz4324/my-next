import navbar from "@/styles/Navbar.module.css";

export default function NavbarContainer() {
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  return (
    <>
      <div className={navbar.container}>
        <div className={navbar.nav}>
          <div className={navbar.logo}>
            <div className={navbar.imgContainer}>
              <img src="/logo.jpeg" alt="" />
            </div>
            <h2>SVT</h2>
          </div>
          <div className={navbar.right}>
            <div className={navbar.navlinks}>
              <div className={navbar.links}>
                <ul>
                  <li>
                    <a href="/">
                      <h5>Home</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/shop">
                      <h5>Shop</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <h5>Contact</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <h5>About</h5>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={navbar.collapse}>
                <div id="mySidebar" className={navbar.sidebar}>
                  <a
                    href="javascript:void(0)"
                    className={navbar.closebtn}
                    onClick={closeNav}
                  >
                    ×
                  </a>
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Clients</a>
                  <a href="#">Contact</a>
                </div>

                <div id="main">
                  <button className={navbar.openbtn} onClick={openNav}>
                    ☰
                  </button>
                </div>
              </div>
            </div>
            <div className={navbar.search}>
              <img src="/search.svg" alt="" />
              <input type="text" placeholder="search here" />
            </div>
            <div className={navbar.phone}>
              <img src="/phone.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
