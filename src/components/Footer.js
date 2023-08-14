import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const footerLinks = ["Careers", "Our Stores", "Our Cares", "Terms & Conditions", "Privacy Policy"];
    const footerCustom = ["Help Center", "How to Buy", "Track Your Order", "Corporate & Bulk Purchasing", "Returns & Refunds"];
  return (
      <>
          {/* Footers section starts. */}
            <footer className='container-fluid footer-sec pb50 pt50'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src=".\assets\logo\logo-white.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                            <div className="footer-images py-3">
                              <img src=".\assets\footer-images\google-play-store.png" alt="Google-Play-Store" />
                              <img src=".\assets\footer-images\apple-play-store.png" alt="Apple-Play-Store" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-about">
                            <h5>About Us</h5>
                            <ul>
                              {footerLinks.map((links, index) => <li key={index}><Link>{links}</Link></li> )}
                            </ul>
                        </div>
                      <div className="col-lg-3 col-md-6 footer-about">
                          <h5>Customer Care</h5>
                            <ul>
                              {footerCustom.map((customer, index) => <li key={index}><Link>{customer}</Link></li>)}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-about">
                          <h5>Contact Us</h5>
                          <p>70 Washington Square South, New York, NY 10012, United States</p>
                          <p>Email: uilib.help@gmail.com</p>
                          <p>Phone: +1 1123 456 780</p>
                          <div className="footer-social-links">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-google"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                          </div>
                        </div>
                    </div>
                </div>
            </footer>
          {/* Footers section ends. */}
      
       {/* Fixed responsive bottom bar section starts */}
       <section className="fixed-bottom-nav py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="text-center">
          <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div className="text-center">
            <i class="fa-light fa-house"></i>
            <p>Home</p>
          </div>
          <div  className="text-center">
          <i className="fa-solid fa-user"></i>
              
            <p>Cart</p>
          </div>
          <div className="text-center">
          <i className="fa-solid fa-bag-shopping"></i>
            <p>Account</p>
          </div>
        </div>
        </section>
      {/* Fixed responsive bottom bar section ends */}
      </>
  )
}

export default Footer