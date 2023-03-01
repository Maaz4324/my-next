import navbar from "@/styles/Navbar.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavbarContainer() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      router.push(`/shop/${searchInput}`);
    }
  };

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
              <img src="/logo.jpeg" alt="Sri venkateshwara trading logo" />
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
                    <a href="/shop/teracotta">
                      <h5>Teracotta</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/shop/frames">
                      <h5>Frames</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/shop/wall-clock">
                      <h5>Clock</h5>
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <h5>Contact</h5>
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
                  <ul>
                    <li>
                      <a href="/">
                        <h5>Home</h5>
                      </a>
                    </li>
                    <li>
                      <a href="/shop/teracotta">
                        <h5>Teracotta</h5>
                      </a>
                    </li>
                    <li>
                      <a href="/shop/frames">
                        <h5>Frames</h5>
                      </a>
                    </li>
                    <li>
                      <a href="/shop/wall-clock">
                        <h5>Clock</h5>
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <h5>Contact</h5>
                      </a>
                    </li>
                  </ul>
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
              <input
                type="text"
                placeholder="search here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className={navbar.phone}>
              <img src="/phone.svg" alt="Sri venkateshwara trading shop" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
