import { Link } from "react-router-dom";
import React,{useState} from "react";
// import Practice from '../components/Practice';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactStars from "react-rating-stars-component";
import PopUp from "./PopUp";


function Home({setCartItems, cartItems, addItemsToCart, ToastContainer, items}) {
  // const [cart, setCart] = useState([]);
  const electronicsItems = ["Wireless Speaker", "Tablet", "Smartphone", "Laptop", "iMac", "Game Controller", "Drone", "Apple"];
  
  // Carousel section starts.
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 1200, min: 464 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const carouselCards = [
    {id: 1, image: "./assets/slider-images/image-1.webp", name: "Silver High Neck Sweater", price: "$210.00"},
    {id: 2, image: "./assets/slider-images/image-2.webp", name: "Yellow Casual Sweater", price: "$110.00" },
    {id: 3, image: "./assets/slider-images/image-3.webp", name: "Denim Blue Jeans", price: "$140.00" },
    {id: 4, image: "./assets/slider-images/image-4.webp", name: "Black White Sweater", price: "$180.00" },
    {id: 5, image: "./assets/slider-images/image-5.webp", name: "Gray Overcoat Women", price: "$110.00" },
    {id: 6, image: "./assets/slider-images/image-6.webp", name: "Women's Fashion", price: "$140.00" },
    {id: 7, image: "./assets/slider-images/image-7.webp", name: "Nike Red", price: "$210.00" },
    {id: 8, image: "./assets/slider-images/image-8.webp", name: "North Star Blue", price: "$110.00"}
  ]
  // Carousel section ends.
  
  // Electronics carousel section starts.
  const electronicsResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    laptop: {
      breakpoint: { max: 1200, min: 464 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // Electronics carousel section ends.
  
  // Items cards section starts.
    const itemCards = [
        {id: 1, image: "./assets/cart-images/cat-1.webp", name:'Toys'},
        {id: 2, image: "./assets/cart-images/cat-2.webp", name:'Sports'},
        {id: 3, image: "./assets/cart-images/cat-3.webp", name:'Gaming'},
        {id: 4, image: "./assets/cart-images/cat-4.webp", name:'Furniture'},
        {id: 5, image: "./assets/cart-images/cat-5.webp", name:'Fashion'},
        {id: 6, image: "./assets/cart-images/cat-6.webp", name:'Camera'},
      ]
    // Items cards section ends.

  // Popup section starts
  const [popupCard, setPopupCard] = useState(false);
  // Popup section ends
  // Add items to carts ends.


  return (
    <>
      {/* <Main/> */}
      {/* Tostify starts */}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* tostify ends */}
          {/* Banner section starts */}
            <section className="container">
              <div className="row">
                  <Carousel className='col-lg-9'>
                    <Carousel.Item className='first-banner'>
                      <img className="d-block w-100" src="./assets/banner-images/banner-1.jpg" alt="First slide"/>
                      <div className='first-banner-content'>
                        <h3>LIFE STYLE COLLECTION <br /> <span>MEN</span> </h3>
                        <h4>SALE UP TO <span>30% OFF</span></h4>
                        <p>Get Free Shipping On Orders Over $99.00</p>
                        <button>Shop Now</button>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className='first-banner'>
                      <img className="d-block w-100" src="./assets/banner-images/banner-2.jpg" alt="Second slide" />
                      <div className='first-banner-content'>
                        <h3>LIFE STYLE COLLECTION <br /> <span>Women</span> </h3>
                        <h4>SALE UP TO <span>35% OFF</span> </h4>
                        <p>Get Free Shipping On Orders Over $99.00</p>
                        <button>Shop Now</button>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                  <div className="col-lg-3 home-banner-cards">
                    <div className='first-banner-card'>
                      <img src="./assets/banner-images/banner-3.jpg" alt="" />
                      <div className='banner-card-content'>
                        <p>NEW ARRIVALS</p>
                        <h6>SUMMER <br /> SALE 20% OFF </h6>
                        <Link to="">Shop Now <i className="fa-solid fa-arrow-right"></i></Link>
                      </div>  
                    </div>
                    <div className='first-banner-card'>
                      <img src="./assets/banner-images/banner-4.jpg" alt="" />
                      <div className='banner-card-content'>
                        <p>GAMING 4K</p>
                        <h6>DESKTOPS & <br /> LAPTOPS </h6>
                        <Link to="">Shop Now <i className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
          {/* Banner section ends */}
      
          {/* Transport section starts */}
            <section className="container-fluid">
                <div className="container transport-section">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 p-3 d-flex align-items-center transport-main">
                            <i className="fa-solid fa-truck-fast"></i>
                            <div>
                              <h6>Fast Delivery</h6>
                              <p>Start from $10</p>
                            </div>  
                        </div>
                        <div className="col-lg-3 col-md-6 p-3 d-flex align-items-center transport-main">
                              <i className="fa-solid fa-piggy-bank"></i>
                            <div>
                              <h6>Money Guarantee</h6>
                              <p>7 Days Back</p>
                            </div>  
                        </div>
                        <div className="col-lg-3 col-md-6 p-3 d-flex align-items-center transport-main">
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            <div>
                              <h6>365 Days</h6>
                              <p>For free return</p>
                            </div>  
                        </div>
                        <div className="col-lg-3 col-md-6 p-3 d-flex align-items-center transport-main">
                              <i className="fa-regular fa-credit-card"></i>
                            <div>
                              <h6>Payment</h6>
                              <p>Secure system</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
          {/* Transport section ends */}
      
          {/* Items cards section starts */}
              <section className="container">
                <div className="row">
                  {
                    itemCards.map((eachItem) => {
                      const {  image, name, id } = eachItem;
                      return (
                        <div className="col-lg-2 col-md-4 col-6" key={id}>
                          <div className="carts-card">
                            <img src={image} alt="" />
                            <h5>{name}</h5>
                          </div>
                        </div>
                      )
                    })
                    }
                </div>
              </section>
          {/* Items cards section ends */}

          {/* Black friday section starts */}
            <section className="container friday-sale">
              <div className="d-flex blc-fri">
                <h3 className="black-friday">BLACK FRIDAY SALE!</h3>
                <div className="friday-scrolling d-flex">
                    <div className="scroll-text">
                        <p>PAY ONLY FOR <span>YOUR LOVING ELECTRONICS</span></p>
                  </div>
                      <button>Shop Now</button>
                  </div>
              </div>
            </section>
          {/* Black friday section ends */}
          
          {/* Deals of the day section starts. */}
            <section className="container pt50 pb50">
                <div className="row">
                    <div className='deals-day'>
                        <h5>Deals Of The Day</h5>
                        <div className="deal-link">
                            <Link to="">More Products <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <Slider responsive={responsive}>
                      {
                        carouselCards.map((items) => 
                          <div className="slider-cards" key={items.id}>
                            <img src={items.image} alt="" />
                            <div className="slider-content">
                                <p>{items.name}</p>
                              <h6>{items.price}</h6>
                              <div className="react-stars">
                                <ReactStars  count={5} size={16} activeColor="#ffd700" value={3} edit={false} />
                              </div>
                              <button onClick={() => addItemsToCart(items)}>Add To Cart</button>     
                                <div className="slider-cards-icon">
                                  <i className="fa-regular fa-heart"></i>
                                  <i className="fa-sharp fa-regular fa-eye" onClick={() => setPopupCard(!popupCard)}></i>
                                </div>
                            </div>
                          </div>
                        )
                      }                          
                    </Slider>
                  </div>
            </section>
          {/* Deals of the day section ends. */}
      
          {/* Home - New arrivals section starts. */}
              <section className="container pt50">
                <div className="row">
                  <div className="col-lg-4 home-arrival-card">
                    <img src="./assets/home-cards/card-img-1.jpg" alt="" />
                    <div className="home-card-content">
                      <p>NEW ARRIVALS</p>
                      <h5>SKI CLOTHES SALE <br /> <span>Up to 35% Off</span> </h5>
                      <div className="deal-link">
                        <Link to="">Shop Now<i className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>                 
                  </div>
                  <div className="col-lg-4 home-arrival-card">
                  <img src="./assets/home-cards/card-img-2.jpg" alt="" />
                  <div className="home-card-content second-card-home">
                    <p>BEST SELLER</p>
                    <h5>TRENDING WOMEN <br /> <span>SUNGLASSES</span> </h5>
                    <div className="deal-link">
                      <Link to="">Shop Now<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-4 home-arrival-card">
                    <img src="./assets/home-cards/card-img-3.jpg" alt="" />
                    <div className="home-card-content">
                      <p>NEW ARRIVALS</p>
                      <h5>NEW LATEST BAG <br /> <span>COLLECTION</span> </h5>
                      <div className="deal-link">
                        <Link to="">Shop Now<i className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          {/* Home - New arrivals section ends. */}
      
          {/* Home - Electronics Carousels section starts. */}
            <section className="container pt50 pb50">
              <div className="row">
                <div className="col-lg-3 home-electronics-card">
                  <h5>Electronic</h5>
                  <ul className='electronics-links'>
                    {electronicsItems.map((value, index) => <li key={index}>{value}</li>)}
                  </ul>
                  <div className="electronics-link">
                    <Link to="">Browse All<i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="col-lg-9">
                    <Slider responsive={electronicsResponsive}>
                      {
                        carouselCards.map((items, index) => 
                          <div className="slider-cards" key={index}>
                            <img src={items.image} alt="" />
                            <div className="slider-content">
                                <p>{items.name}</p>
                              <h6>{items.price}</h6>
                              <div className="react-stars">
                                <ReactStars  count={5} size={16} activeColor="#ffd700" value={3} edit={false} />
                              </div>
                                <button onClick={() => addItemsToCart(items)}>Add To Cart</button>
                                <div className="slider-cards-icon">
                                  <i className="fa-regular fa-heart"></i>
                                  <i className="fa-sharp fa-regular fa-eye" onClick={() => setPopupCard(!popupCard)}></i>
                                </div>
                            </div>
                          </div>
                        )
                      }                          
                    </Slider>
                </div>
              </div>
            </section>
          {/* Home - Electronics Carousels section ends. */}
      
          {/* Home - Final reduction section starts. */}
            <section className="container">
              <div className="row">
                <div className="col-lg-6 home-final-card">
                  <img src=".\assets\home-cards\banner-21.jpg" alt="" />
                  <div className='home-final-content'>
                    <h6>Final Reduction</h6>
                    <h3>Sale up to 20% Off</h3>
                    <h6>Only From <span> $270.00</span></h6>
                  </div>
                </div>
                <div className="col-lg-6 home-final-card">
                  <img src=".\assets\home-cards\banner-22.jpg" alt="" />
                  <div className='home-final-content home-final-seccard'>
                    <h6>Weekend Sale</h6>
                    <h3>Fine Smart Speaker</h3>
                    <h6>Starting at  <span>$185.00</span></h6>
                  </div>
                </div>
              </div>
            </section>
          {/* Home - Final reduction section ends. */}
      
          {/* Home - Men's fashion Carousels section starts. */}
            <section className="container pt50 pb50">
              <div className="row">
                <div className="col-lg-3 home-electronics-card">
                  <h5>Men's Fashion</h5>
                  <ul className='electronics-links'>
                    {electronicsItems.map((value, index) => <li key={index}>{value}</li>)}
                  </ul>
                  <div className="electronics-link">
                    <Link to="">Browse All<i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="col-lg-9">
                    <Slider responsive={electronicsResponsive}>
                      {
                        carouselCards.map((items, index) => 
                          <div className="slider-cards" key={index}>
                            <img src={items.image} alt="" />
                            <div className="slider-content">
                                <p>{items.name}</p>
                              <h6>{items.price}</h6>
                              <div className="react-stars">
                                <ReactStars  count={5} size={16} activeColor="#ffd700" value={3} edit={false} />
                              </div>
                                <button onClick={() => addItemsToCart(items)}>Add To Cart</button>
                                <div className="slider-cards-icon">
                                  <i className="fa-regular fa-heart"></i>
                                  <i className="fa-sharp fa-regular fa-eye" onClick={() => setPopupCard(!popupCard)}></i>
                                </div>
                            </div>
                          </div>
                        )
                      }                          
                    </Slider>
                </div>
              </div>
            </section> 
          {/* Home - Men's Carousels section ends. */}
      
          {/* Home - Off section starts. */}
            <section className="container home-off-sec">
              <div>
                <h1>GIFT <span>50% OFF</span> PERFECT STYLES</h1>
                <p>Only until the end of this week. Terms and conditions apply</p>
              </div>
              <div className="home-off-sec-btn">
                <button><a href="/">Discover Now</a></button>   
             </div>
            </section>
          {/* Home - Off section Ends. */}
      
          {/* Home - Women's fashion Carousels section starts. */}
            <section className="container pt50 pb50">
              <div className="row">
                <div className="col-lg-3 home-electronics-card">
                  <h5>Women's Fashion</h5>
                  <ul className='electronics-links'>
                    {electronicsItems.map((value, index) => <li key={index}>{value}</li>)}
                  </ul>
                  <div className="electronics-link">
                    <Link to="">Browse All<i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="col-lg-9">
                    <Slider responsive={electronicsResponsive}>
                      {
                        carouselCards.map((items, index) => 
                          <div className="slider-cards" key={index}>
                            <img src={items.image} alt="" />
                            <div className="slider-content">
                                <p>{items.name}</p>
                                <h6>{items.price}</h6>
                                <div className="react-stars">
                                  <ReactStars  count={5} size={16} activeColor="#ffd700" value={3} edit={false} />
                                </div>
                                <button onClick={() => addItemsToCart(items)}>Add To Cart</button>
                                <div className="slider-cards-icon">
                                  <i className="fa-regular fa-heart"></i>
                                  <i className="fa-sharp fa-regular fa-eye" onClick={() => setPopupCard(!popupCard)}></i>
                                </div>
                            </div>
                          </div>
                        )
                      }                          
                    </Slider>
                </div>
              </div>
            </section> 
          {/* Home - Women's Carousels section ends. */}
          {/* <Practice /> */}

          {/* Featured brands section starts. */}
            <section className="container featured pb50">
              <h4>Featured Brands</h4>
              <div className="row featured-images p-4">
                  <div className="col-lg-2 col-md-2 featured-img">
                      <img src=".\assets\featured-brands\alibaba.png" alt="" />
                  </div>
                  <div className="col-lg-2 col-md-2 featured-img">
                      <img src=".\assets\featured-brands\levis.png" alt="" />
                  </div>
                  <div className="col-lg-2 col-md-2 featured-img">
                      <img src=".\assets\featured-brands\lotto.png" alt="" />
                  </div>
                  <div className="col-lg-2 col-md-2 featured-img">
                      <img src=".\assets\featured-brands\raymond.png" alt="" />
                  </div>
                  <div className="col-lg-2 col-md-2 featured-img">
                      <img src=".\assets\featured-brands\samsung.png" alt="" />
                  </div>
              </div>
            </section>       
          {/* Featured brands section ends. */}
      
          {/* Selected products section starts */}
            <section className="container pb50">
              <div className="d-flex justify-content-between products-home-content">
                <div>
                  <h4>Selected Products</h4>
                  <p>All our new arrivals in a exclusive brand selection</p>
                </div>
                <div className="d-flex products-buttons">
                  <button>New Arrivals</button>
                  <button>Best Seller</button>
                  <button>More Popular</button>
                  <button>View All</button>
                </div>
              </div>
                    <Slider responsive={responsive}>
                      {
                        carouselCards.map((items, index) => 
                          <div className="slider-cards" key={index}>
                            <img src={items.image} alt="" />
                            <div className="slider-content">
                                <p>{items.name}</p>
                                <h6>{items.price}</h6>
                                <div className="react-stars">
                                  <ReactStars  count={5} size={16} activeColor="#ffd700" value={3} edit={false} />
                                </div>
                                <button onClick={() => addItemsToCart(items)}>Add To Cart</button>
                                <div className="slider-cards-icon">
                                  <i className="fa-regular fa-heart"></i>
                                  <i className="fa-sharp fa-regular fa-eye" onClick={() => setPopupCard(!popupCard)}></i>
                                </div>
                            </div>
                          </div>
                        )
                      }                          
                    </Slider>
            </section>
          {/* Selected products section ends */}
      
          {/* Pop up section starts. */}
      <PopUp popupCard={popupCard} setPopupCard={setPopupCard} cartItems={cartItems} addItemsToCart={addItemsToCart} items={items} />
          {/* Pop up section ends. */}
         
      </>
  )
}

export default Home
