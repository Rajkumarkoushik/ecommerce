import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Home from "./Home";
import AddToCart from "./AddToCart";

function Main({ carouselCards, cartRemove, setCartRemove, size, cartItems, setCartItems }) {
  const [categories, setcategories] = useState(false);
  const [allCategeries, setAllCategeries] = useState(false);
  // const [click, setClick] = useState(false);
  // const [resetPass, setResetPass] = useState(false);
  const [popUpForm, setPopUpForm] = useState(false);
  // Input field border color change starts.
  const [changeColor, setChangeColor] = useState(false);
  function borderColorFocus() {
    setChangeColor(true);
  }
  function borderColorBlur() {
    setChangeColor(false);
  }
  // Input field border color change ends.

  const [password, setPassword] = useState(false);
  const [loginForm, setloginForm] = useState(false);

  // Login

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    window.addEventListener("load", handleWindowLoad);
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  const handleWindowLoad = () => {
    setIsLoad(true);
  };

  // Back to top section starts.
  const [visibleBtn, setVisibleBtn] = useState(false);

  useEffect(() => {
    const btnVisible = () => {
      const visibility = window.pageYOffset;

      if (visibility > 100) {
        setVisibleBtn(true);
      } else {
        setVisibleBtn(false);
      }
    };
    return () => window.addEventListener("scroll", btnVisible);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Back to top section ends.

  return (
    <>
      {/* Head nav section starts */}
      <header className="container-fluid head-main">
        <div className="container">
          <div className="d-flex justify-content-between head-nav-sec">
            <div className="d-flex head-nav-start">
              <button>HOT</button>
              <p>Free Express Shipping</p>
            </div>
            <div className="d-flex main-head-social">
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Head nav section ends */}

      {/* Main nav section starts */}
      <nav className="container-fluid pt20 navigation">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <NavLink to="/">
                <img src=".\assets\logo\logo.svg" alt="" />
              </NavLink>
            </div>
            <div className="nav-search">
              <form action="" className="form-search">
                <input type="text" placeholder="Searching for......" />
              </form>
              <div className="nav-selection">
                <button
                  onClick={() => setAllCategeries(!allCategeries)}
                  className="categeriesbutton"
                >
                  All Categories
                  {allCategeries && (
                    <ul className="head-links">
                      <li>
                        <a href="/">All Categories</a>
                      </li>
                      <li>
                        <a href="/">Car</a>
                      </li>
                      <li>
                        <a href="/">Clothes</a>
                      </li>
                      <li>
                        <a href="/">Electronics</a>
                      </li>
                      <li>
                        <a href="/">Laptop</a>
                      </li>
                      <li>
                        <a href="/">Desktop</a>
                      </li>
                      <li>
                        <a href="/">Camera</a>
                      </li>
                      <li>
                        <a href="/">Toys</a>
                      </li>
                    </ul>
                  )}
                </button>
              </div>
            </div>
            <div className="main-nav-icons">
              <i
                className="fa-regular fa-user"
               onClick={() => setloginForm(!loginForm)}
              ></i>
              <i
                className="fa-solid fa-bag-shopping"
                onClick={() => setCartRemove(!cartRemove)}
              ></i>
              <span>{size}</span>
            </div>
          </div>
        </div>
      </nav>
      {/* Main nav section ends */}

      {/* Nav section starts */}
      <section className="container-fluid navigation-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-2 col-sm-2 nav-button">
              <button onClick={() => setcategories(!categories)}>
                Categories
              </button>
              <div>
                <ul
                  className="nav-links"
                  style={{
                    transform: categories ? "scaleY(1)" : "scaleY(0)",
                    transition: categories ? "all o.5s" : "all 0.5s",
                    transformOrigin: categories ? "top" : "center top",
                  }}
                >
                  <li>
                    <a href="/">
                      {" "}
                      <img
                        src=".\assets\categories-list\dress.png"
                        alt=""
                      />{" "}
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src=".\assets\categories-list\laptop.png" alt="" />{" "}
                      Electronics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-8 col-md-10 col-sm-10">
              <ul className="d-flex navigation-links">
                <li className="nav-home">
                  <NavLink to="/">
                    Home <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                  <ul className="nav-sub-links">
                    <li>
                      <NavLink>Clothes</NavLink>
                    </li>
                    <li>
                      <NavLink>Watches</NavLink>
                    </li>
                    <li>
                      <NavLink>Furniture</NavLink>
                    </li>
                    <li>
                      <NavLink>Grocery</NavLink>
                    </li>
                    <li>
                      <NavLink>Gift Store</NavLink>
                    </li>
                    <li>
                      <NavLink>Health & Beauty</NavLink>
                    </li>
                    <li>
                      <NavLink>Gadget</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-home">
                  <NavLink to="/megamenu">
                    Mega Menu{" "}
                    <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                  <div className="nav-sub-links home-mega-menu">
                    <div className="mega-link-first">
                      <h6>Home</h6>
                      <ul>
                        <li>
                          <NavLink>Market 1</NavLink>
                        </li>
                        <li>
                          <NavLink>Furniture</NavLink>
                        </li>
                        <li>
                          <NavLink>Grocery</NavLink>
                        </li>
                        <li>
                          <NavLink>Health & Beauty</NavLink>
                        </li>
                        <li>
                          <NavLink>Gift Store</NavLink>
                        </li>
                        <li>
                          <NavLink>Fashion</NavLink>
                        </li>
                        <li>
                          <NavLink>Gadget</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6>User Account</h6>
                      <ul>
                        <li>
                          <NavLink>Order List</NavLink>
                        </li>
                        <li>
                          <NavLink>Order Details</NavLink>
                        </li>
                        <li>
                          <NavLink>View profile</NavLink>
                        </li>
                        <li>
                          <NavLink>Edit profile</NavLink>
                        </li>
                        <li>
                          <NavLink>Address List</NavLink>
                        </li>
                        <li>
                          <NavLink>Add Address</NavLink>
                        </li>
                        <li>
                          <NavLink>All Tickets</NavLink>
                        </li>
                        <li>
                          <NavLink>Ticket Details</NavLink>
                        </li>
                        <li>
                          <NavLink>Wishlist</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-link-first">
                      <h6>Vendor Account</h6>
                      <ul>
                        <li>
                          <NavLink>Dashboard</NavLink>
                        </li>
                        <li>
                          <NavLink>Profile</NavLink>
                        </li>
                        <h6>Products</h6>
                        <li>
                          <NavLink>All Products</NavLink>
                        </li>
                        <li>
                          <NavLink>Add/Edit Product</NavLink>
                        </li>
                        <h6>Others</h6>
                        <li>
                          <NavLink>All Orders</NavLink>
                        </li>
                        <li>
                          <NavLink>Order Details</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6>Sale Page</h6>
                      <ul>
                        <li>
                          <NavLink>Sales Version 1</NavLink>
                        </li>
                        <li>
                          <NavLink>Sales Version 2</NavLink>
                        </li>
                        <h6>Shop</h6>
                        <li>
                          <NavLink>Search Product</NavLink>
                        </li>
                        <li>
                          <NavLink>Single Product</NavLink>
                        </li>
                        <li>
                          <NavLink>Cart</NavLink>
                        </li>
                        <li>
                          <NavLink>Checkout</NavLink>
                        </li>
                        <li>
                          <NavLink>Alternative Checkout</NavLink>
                        </li>
                        <li>
                          <NavLink>Order Conformation</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink to="/full">
                    Full Screen Menu{" "}
                    <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages">
                    Pages <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user">
                    User Account{" "}
                    <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vendor">
                    Vendor Account{" "}
                    <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Nav section ends */}

      {/* Add items to carts section starts. */}
      <AddToCart
        cartRemove={cartRemove}
        setCartRemove={setCartRemove}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {/* Add items to carts section ends. */}

      {/* Home pop up section starts. */}
      {isLoad && (
        <section
          className="container-fluid home-pop-sec"
          style={{
            transform: popUpForm ? "scale(0)" : "scale(1)",
            transition: popUpForm ? "0.4s" : "0.4s",
          }}
        >
          <div className="container home-pop-up">
            <div className="login-remove">
              <i
                className="fa-sharp fa-solid fa-xmark"
                onClick={() => setPopUpForm(!popUpForm)}
              ></i>
            </div>
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="home-popup-text">
                  <h3>
                    UP TO <span>30% OFF</span>{" "}
                  </h3>
                  <h1>
                    Sign up to <span>BAZAAR</span>{" "}
                  </h1>
                  <p>
                    Subscribe to the BAZAR eCommerce newsletter to receive
                    timely updates from your favorite products.
                  </p>
                </div>
                <form action="" className="home-popup-from">
                  <input type="email" placeholder="Enter your email address" />
                  <button>Submit</button>
                </form>
                <div className="pop-social-media">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-google"></i>
                </div>
                <form action="" className="pop-up-check">
                  <input type="checkbox" />
                  <p>No, Thanks</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Home pop up section ends. */}

      {/* Back to top section starts. */}
      {visibleBtn && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="fa-sharp fa-solid fa-angle-up"></i>
        </button>
      )}
      {/* Back to top section starts. */}
      {/* Login form section starts. */}
      <section
        className="home-login-form"
        style={{transform: loginForm ? "scale(1)" : "scale(0)"}}
      >
        <div className="home-login-form-sec">
          <div className="login-remove">
            <i className="fa-sharp fa-solid fa-xmark" onClick={() => setloginForm(!loginForm)}></i>
          </div>
          <div className="home-login-title">
            <img src=".\assets\logo\logo.svg" alt="" />
            <h6>Welcome To Bazaar</h6>
          </div>
          <form className="home-form">
            <label htmlFor="text">Email or Phone Number</label> <br />
            <input
              type="text"
              placeholder="example@gmail.com"
              style={{
                border: changeColor ? "2px solid red" : "1px solid #bfc3ca",
              }}
              onFocus={borderColorFocus}
              onBlur={borderColorBlur}
              required
            />
            <label htmlFor="text">Password</label> <br />
            <div className="pass-login">
              <input
                type={password ? "text" : "password"}
                placeholder="*********"
                required
              />
              <span onClick={() => setPassword(!password)}>
                {password ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </span>
            </div>
            <button>Login</button>
          </form>
          <div className="form-para">
            <p>or</p>
          </div>
          <div className="login-form-btns">
            <button className="fb-btn">
              <i className="fa-brands fa-facebook"></i>Continue with Facebook
            </button>{" "}
            <br />
            <button className="google-btn">
              <i className="fa-brands fa-google"></i>Continue with Google
            </button>
            <p>
              Don't have account? <NavLink to="/signup">Sign Up</NavLink>{" "}
            </p>
          </div>
          <div className="login-reset">
            {/* <p>Forgot your password? <span onClick={() => setResetPass(!resetPass)}>Reset It</span> </p> */}
            <p>
              Forgot your password? <NavLink to="/reset">Reset It</NavLink>{" "}
            </p>
          </div>
        </div>
      </section>
      {/* Login form section ends. */}
    </>
  );
}

export default Main;
