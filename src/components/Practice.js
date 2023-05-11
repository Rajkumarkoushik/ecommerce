import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Practice(props) {

    const [hidePara, setHidePara] = useState(false);
    const [passHide, setPassHide] = useState(false);
    const [borderChange, setBorderChange] = useState(false);
    function focusColorChange() {
        setBorderChange(true);
    }
    function blurColorChange() {
        setBorderChange(false);
    }

    const [formText, setFormtext] = useState({ firtsName: "", lastName: "" });

    const cardsDetails = [
        {name: "koushik", position: "Web Developer", age: 25, experience: 1},
        {name: "raj", position: "Web Developer", age: 25, experience: 1},
        {name: "kumar", position: "Web Developer", age: 25, experience: 1},
        {name: "suresh", position: "Web Developer", age: 25, experience: 1},
        {name: "ramana", position: "Web Developer", age: 25, experience: 1},
        {name: "mani", position: "Web Developer", age: 25, experience: 1},
        {name: "charan", position: "Web Developer", age: 25, experience: 1},
        {name: "chinna", position: "Web Developer", age: 25, experience: 1},
        {name: "sreekanya", position: "Web Developer", age: 25, experience: 1},
        {name: "devi", position: "Web Developer", age: 25, experience: 1},
        {name: "nitya", position: "Web Developer", age: 25, experience: 1}
    ]

    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        const btnVisible = () => {
            const visibility = window.pageYOffset;
            if (visibility > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            };
        };
        return () => window.addEventListener('scroll', btnVisible);
    });
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    const [increment, setIncrement] = useState(0);
    const initialValue = 0;

    const [btnLoad, setBtnLoad] = useState(false);
    
    useEffect(() => {
        window.addEventListener("load", showBtn);
        return () => {
            window.removeEventListener("load", showBtn);
        }
    });

    const showBtn = () => {
        setBtnLoad(true);
    };




    
  return (
      <>

            <button onClick={() => setHidePara(!hidePara)}>Click</button>
            <p style={{ display: hidePara ? "block" : "none" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptate. Fugiat explicabo excepturi, vel labore fugit ea esse suscipit tempore.</p>
        
          
            <form action="">
                <input type={passHide ? "text" : "password"} style={{ border: borderChange ? "2px solid red" : "1px solid black" }} onFocus={focusColorChange} onBlur={blurColorChange} />
                <button onClick={() => setPassHide(!passHide)}>Hide</button>
            </form>

            <form action="">
                <input type="text" onChange={e => setFormtext({...formText, firstName:e.target.value})}/>
                <input type="text" onChange={e => setFormtext({...formText, lastName : e.target.value})}/>
              <p>FirstName :-{formText.firstName}</p>
                <p>LastName :-{formText.lastName}</p>
            </form>
            
            <div className="container">
              <div className="row">
                  {
                      cardsDetails.map((values, index) => 
                        <div className="col-lg-2">
                            <h6>Name:-{values.name}</h6>
                              <p>Age:-{values.age}</p>
                              <p>Position:-{values.position}</p>
                              <p>Experience:-{values.experience}</p>
                        </div> 
                      )
                  }   
                </div>
            </div>
          {backToTop &&( 
              <button className="btntop" onClick={scrollToTop}>Top</button>
          )}
            
          <button onClick={() => setIncrement(increment + 1)}>Increment</button>
          <button onClick={() => setIncrement(increment - 1)}>Decrement</button>
          <button onClick={() => setIncrement(initialValue)}>Reset</button>
          <p>{increment}</p>
            
          {btnLoad && (
             <div>
                  <button style={{ display: btnLoad ? "block" : "none" }} className='hide-btn'>Click</button>
                  <button onClick={() => setBtnLoad(!btnLoad)}>Remove</button>
             </div>
          )}


      </>
  )
}

export default Practice