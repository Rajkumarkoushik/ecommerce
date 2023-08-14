import React,{useState} from "react";
import ReactStars from "react-rating-stars-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function PopUp({ popupCard, setPopupCard, cartItems, handleRemove, addItemsToCart, items }) {
  return (
    <>
      <section
        className="popup-main" style={{ visibility: popupCard ? "visible" : "hidden" }}>
        <div className="popup-section d-flex p-3 align-items-center">
          <Carousel className="popup-img">
            <img src=".\assets\slider-images\image-1.webp" alt="" />
            <img src=".\assets\slider-images\image-1.webp" alt="" />
          </Carousel>
          <div>
            <h4>Silver High Neck Sweater</h4>
            <h6>CATEGORY : Cosmetic</h6>
            <h2>$210.00</h2>
            <div>
              <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              modi. Deserunt explicabo, harum atque ex, nulla delectus blanditiis,
              quidem quos omnis sunt doloremque repellendus corrupti dolore
              expedita ipsam tempore nobis!
            </p>
            {/* <div>
              <button>+</button>
              <button>0</button>
              <button>-</button>
            </div> */}
            {/* <div>
               <button onClick={() => addItemsToCart()}>Add To Cart</button> 
            </div> */}
          </div>
          <div className="login-remove" onClick={() => setPopupCard(!popupCard)}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
        
        {/* <Carousel>
                <div>
                    <img src=".\assets\banner-images\banner-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src=".\assets\banner-images\banner-1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src=".\assets\banner-images\banner-1.jpg" />
                    <p className="legend">Legend 3</p>
          </div>
          </Carousel> */}
      </section>
    </>
  );
}

export default PopUp;
