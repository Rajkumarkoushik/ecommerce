import React, { useState, useEffect } from "react";

function AddToCart({ setCartRemove, cartRemove, cartItems, setCartItems }) {
  const [value, setValue] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cartItems.map((item) => {
      ans += item.amount * item.value;
    });
    setValue(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
    handlePrice();
  };

  return (
    <>
      {/* Add items section start. */}
      <section
        className="home-cart-items p-3"
        style={{
          transform: cartRemove ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        <div className="d-flex justify-content-between hone-cart-add">
          <p>
            <i className="fa-solid fa-bag-shopping"></i> 0 item
          </p>
          <i
            className="fa-sharp fa-solid fa-xmark"
            onClick={() => setCartRemove(!cartRemove)}
          ></i>
        </div>
        <div className="home-cart-empty">
          {cartItems.length === 0 ?  (<div className="addtocart-empty"> 
                    <img src=".\assets\cart-images\shopping-bag.svg" alt="" />
                    <h6>Your shopping bag is empty. <br /> Start shopping</h6>
                  </div>) : cartItems?.map((item) => {
            return (
              <div key={item.id} className="d-flex align-items-center gap-10 addtocart-sec justify-content-between">
                <div className="addtocart-buttons">
                  <button>+</button>
                  <button>{item.amount}</button>
                  <button>-</button>
                </div>
                <div className="addtocart-products">
                  <img src={item.image} alt="" />
                </div>
                <div className="addtocart-title">
                  <h6>{item.name}</h6>
                  <p>{item.price}</p>
                  <span>{item.price}</span>
                </div>
                <div>
                   <i onClick={() => handleRemove(item.id)}
                  className="fa-sharp fa-solid fa-xmark"></i>
                </div>
              </div>
            );
          })}
          <div className="addtocart-checkbtns my-3">
            <button>Checkout Now${value}</button>
            <button>View Cart</button>
          </div>
        </div>
      </section>
      {/* Add items section ends. */}
    </>
  );
}

export default AddToCart;
