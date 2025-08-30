import React from 'react'

import './Home.css'
import Navbar  from '../Navbar/Navbar'
import bgvideo from '../images/bgvideo.mp4'
import cardimg1 from '../images/aithreat.png'
import promoimage from '../images/promo-image.png'
import Footer from '../Footer/Footer'
function Home() {
  return (
<>
<Navbar/>

<div className="home-container">

<div className="hero-section">
<video className="hero-background-video" autoPlay loop muted>
<source src={bgvideo} type="video/mp4" />
</video>

<div className="hero-overlay">
<h1 className="hero-title">ASTRONAV</h1>
<h3 className="hero-subtitle">your Co-Pilot to the Cosmos</h3>
</div>
</div>


<div className="cardcontainer">
  <div className="cards">
    <img src="https://framerusercontent.com/images/tPxBcbBZp4WnrLJ8o0k9M7C3xnA.svg" alt="Revealling Threats" className="cardimg" />
    <h1>Revealling Threats</h1>
    <p>We detect the 99.9% of orbital debris currently invisible to other tracking methods.</p>
  </div>
    <div className="cards">
    <img src="https://framerusercontent.com/images/E7SP7G1VgkMheDvCSOYrwUjTFMU.svg" alt="Revealling Threats" className="cardimg" />
    <h1>Revealling Threats</h1>
    <p>We detect the 99.9% of orbital debris currently invisible to other tracking methods.</p>
  </div>
    <div className="cards">
    <img src="https://framerusercontent.com/images/lyUAf68pQLDHwwcAYVLkL73F7gs.svg" alt="Revealling Threats" className="cardimg" />
    <h1>Revealling Threats</h1>
    <p>We detect the 99.9% of orbital debris currently invisible to other tracking methods.</p>
  </div>

  <div className="cards">
    <img src="https://framerusercontent.com/images/6l9XB9uCbOA51jpRzSgokQmWw.svg" alt="Revealling Threats" className="cardimg" />
    <h1>Revealling Threats</h1>
    <p>We detect the 99.9% of orbital debris currently invisible to other tracking methods.</p>
  </div>

</div>



<div className="promotional-image-container">


<div
  className="parallax-strip"
  style={{ backgroundImage: `url(${promoimage})` }}>
</div>

<div className="promo-text-container">
<h2 className="overlay-text">your Co-Pilot to the Cosmos</h2>


<div className="promocards-container"  >
  <div className="promocards">
    <img className="promoimg" src={cardimg1}/>
    <h4>Faster</h4>
  </div>
  <div className="promocards">
    <img className="promoimg" src={cardimg1}/>
    <h4>Faster</h4>
  </div>
    <div className="promocards">
    <img className="promoimg" src={cardimg1}/>
    <h4>Faster</h4>
  </div>
    <div className="promocards">
    <img className="promoimg" src={cardimg1}/>
    <h4>Faster</h4>
  </div>
    <div className="promocards">
    <img className="promoimg" src={cardimg1}/>
    <h4>Faster</h4>
  </div>
</div>




</div>


</div>




</div>

<Footer/>
</>
  )
}

export default Home
