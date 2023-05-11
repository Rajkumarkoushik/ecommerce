import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
function Pages() {

  const [fake, setFake] = useState([]);

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async() => {
    const storeResponse = await fetch("http://universities.hipolabs.com/search?country=United+States");
    console.log(storeResponse)
    const jsonStore = await storeResponse.json();
    console.log(jsonStore);
    setFake(jsonStore);
  }
 


  return (
    <>
  {/* <NavBar /> */}
      <div className="container">
        <div className="row">
          {fake.map((values) => {
            return (
              <>
                <div className="col-lg-4 cards-api">
                  <h6>Name:- {values.name}</h6>
                  <p><Link to={values.domains} >domain:- {values.domains}</Link></p>
                  <p> <Link to="{values.web_pages}">web_pages:-{values.web_pages}</Link></p>
                  <p>country</p>
                </div>
              </>
            )
          })}
         
          
        </div>
      </div>
    </>
  )
}

export default Pages