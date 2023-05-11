import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MegaMenu from './components/MegaMenu';
import FullScreen from './components/FullScreen';
import Pages from './components/Pages';
import UserAccount from './components/UserAccount';
import VendorAccount from './components/VendorAccount';
import SignUp from './components/SignUp';
import Reset from './components/Reset';
import NotFound from './components/NotFound';
import Footer from './components/Footer';


function App() {

    // Cart remove
    const [cartRemove, setCartRemove] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [warning, setWarning] = useState(false);
  
    // Add items to carts starts.
    const addItemsToCart = (item) => {
      let isPresent = false;
      cartItems.forEach((product) => {
        if (item.id === product.id)
          isPresent = true;
      })
      if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        return;
      }
      setCartItems([...cartItems, item]);
    }
  
  return (
    <>
      <BrowserRouter>
        <NavBar cartRemove={cartRemove} setCartRemove={setCartRemove} cartItems={cartItems} size={cartItems.length} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} addItemsToCart={addItemsToCart} />}/>
          <Route path="megamenu" element={<MegaMenu/>}/>
          <Route path="full" element={<FullScreen/>}/>
          <Route path="pages" element={<Pages/>}/>
          <Route path="user" element={<UserAccount/>}/>
          <Route path="vendor" element={<VendorAccount/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="reset" element={<Reset/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {
        warning && <h4 className='warning'>Added to cart</h4>
      }
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
