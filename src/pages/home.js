import React from 'react';
import im2 from "./mental.png";
import si1 from "./mental.png";
import si2 from "./mental.png";
import si3 from "./mental.png";
import si4 from "./mental.png";
import si5 from "./mental.png";
import si6 from "./mental.png";
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div style={{background:'black'}}>         
     <section class="section">
                <div class="box-main">
                    <div class="concert">
                    
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program" style={{ color: 'white'}}>
                            <br></br>
                            Connect
                        </h1>

                        <figure>
<div class="row">
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}> <img src={si1} id="si1" alt=" Snow" style={{width:'80%'} }/></button></Link>
   
      <h3 style={{color:'white'}}> P1</h3>
      <figcaption ></figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button to='/form' style={{background:'black'}}><img src={si2} alt=" Snow" style={{width:'80%'}}/></button></Link>
      <h3 style={{color:'white'}}> P2</h3>
      <figcaption></figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si3} alt=" Snow" style={{width:'80%'}} height="275"/></button></Link>
    <h3 style={{color:'white'}}>P3 </h3>
      <figcaption></figcaption>
    </div>
    
</div>

</figure>
<br></br>
<br></br>
<br></br>
<br></br>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                    <figure>
<div class="row">
    <div class="column">
    <Link to="/form"><button style={{background:'black'}} ><img src={si4} alt="Snow" style={{width:'80%'}} height="370"/></button></Link>
      <h3 style={{color:'white'}}> P4</h3>
      <figcaption></figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si5} alt="Snow" style={{width:'80%'}}height="370"/></button></Link>
      <h3 style={{color:'white'}}>P5</h3>
      <figcaption></figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si6} alt="Snow" style={{width:'80%'}} height="370"/></button></Link>
      <h3 style={{color:'white'}}> P6</h3>
      <figcaption></figcaption>
    </div>
  </div>
</figure>
                       
                    </div>
                </div>
            </section>            
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
  );
};
  
export default Events;