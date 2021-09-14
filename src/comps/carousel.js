import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
 Link
 
} from "react-router-dom";

export default function Carousel1() {
  return (
    <div className="container " style={{ width: '100vw', maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '100px', background: 'url(images/bgupdatednew.png)', backgroundPosition: 'canter', backgroundAttachment: 'scroll', backgroundSize: '100vw' }}>
      <div style={{ width: '100vw', maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px', paddingBottom: '100px', background: 'url(images/Small-Stars.png)', backgroundPosition: 'canter', backgroundAttachment: 'scroll', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" >
            <div class="carousel-item active">
              <img src="images/Header-01.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-02.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-03.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-08.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-05.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-06.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/Header-07.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />
        <div className="container" >
          <h3 style={{ textAlign: 'center', color: '#ffde00', fontSize: '38px', fontWeight: '700', }}>Welcome to Rockace</h3>
          <br />
          <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>Rockace was established in January 2019 to overcome the dearth of high-end art and game development in the dynamic casino and slot game industry. Helmed by veterans from the gaming industry, we bridge the gap in the market with high-end concept art, 3D assets and animation for a range of platforms. Rockace hit the ground running and has to its credit 30 titles within its first year of operation, with plans of scaling exponentially in the near future.</p>
          <br />
          <br />
          <h3 style={{ textAlign: 'center', color: '#ffde00', fontSize: '38px', fontWeight: '700', }}>An ace up our sleeve</h3>
          <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>As a subsidiary of Rocksalt Interactive Games Pvt. Ltd., we have a one-of-a-kind advantage. Rockace draws from Rocksalt's extensive expertise in providing superlative animation, art and gaming experiences to the best names in the industry. These exclusive insights differentiate us from our competitors, giving us an edge that helps us orchestrate immersive, unparalleled experiences of the highest quality for our clients.</p>
          <div class="text-center">
           <Link to="/aboutr"> <button className="btn btn-primary ">Learn More</button></Link>
          </div>
        </div>

        <div className="container" style={{ background: 'transparent', marginTop: '50px', paddingLeft: '10%' }}>
          <div className="col-md-10" style={{ background: 'transparent' }}>
            <div className="row counters" style={{ background: 'transparent' }}>
              <div className="col-lg-4 col-12 col-sm-6 text-center" style={{ background: 'transparent' }}>
                <div className="fact-image" style={{ height: '175px', borderRadius: '0 0px 10px 10px', background: 'linear-gradient(to top,rgb(255, 255, 255,0.3) ,rgb(255, 255, 255,0.05) )', margin: '0 auto', paddingTop: '30px', width: '125px', paddingLeft: '20px', paddingRight: '15px' }}>
                  <div style={{ width: '85px', height: '85px', marginTop: '20px', marginBottom: '10px' }}>
                    <img src="images/Creative_Icon.png" />
                  </div>
                </div>
                <div style={{ fontSize: '25px', color: 'white', paddingTop: '40px', paddingBottom: '25px' }}>
                  <span data-toggle="counter-up" style={{ fontSize: '38px', fontWeight: 'bold', fontFamily: 'gt_walsheimregular' }}>130</span>
                  <span style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'gt_walsheimregular' }}>+</span>
                  <p>Creative</p>
                </div>

              </div>
              <div className="col-lg-4 col-12 col-sm-6 text-center" style={{ background: 'transparent' }}>
                <div className="fact-image" style={{ height: '175px', borderRadius: '0 0px 10px 10px', background: 'linear-gradient(to top,rgb(255, 255, 255,0.3) ,rgb(255, 255, 255,0.05) )', margin: '0 auto', paddingTop: '30px', width: '125px', paddingLeft: '20px', paddingRight: '15px' }}>
                  <div style={{ width: '85px', height: '85px', marginTop: '20px', marginBottom: '10px' }}>
                    <img src="images/Client_Development.png" />
                  </div>
                </div>
                <div style={{ fontSize: '25px', color: 'white', paddingTop: '40px', paddingBottom: '25px' }}>
                  <span data-toggle="counter-up" style={{ fontSize: '38px', fontWeight: 'bold', fontFamily: 'gt_walsheimregular' }}>30</span>
                  <span style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'gt_walsheimregular' }}>+</span>
                  <p>Client Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-12 col-sm-6 text-center" style={{ background: 'transparent' }}>
                <div className="fact-image" style={{ height: '175px', borderRadius: '0 0px 10px 10px', background: 'linear-gradient(to top,rgb(255, 255, 255,0.3) ,rgb(255, 255, 255,0.05) )', margin: '0 auto', paddingTop: '30px', width: '125px', paddingLeft: '15px', paddingRight: '15px' }}>
                  <div style={{ width: '85px', height: '85px', marginTop: '20px', marginBottom: '10px' }}>
                    <img src="images/Implementation.png" />
                  </div>
                </div>
                <div style={{ fontSize: '25px', color: 'white', paddingTop: '40px', paddingBottom: '25px' }}>
                  <span data-toggle="counter-up" style={{ fontSize: '38px', fontWeight: 'bold', fontFamily: 'gt_walsheimregular' }}>70</span>
                  <span style={{ fontSize: '38px', fontWeight: '900', fontFamily: 'gt_walsheimregular' }}>+</span>
                  <p>Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <h3 style={{ textAlign: 'center', color: '#ffde00', fontSize: '38px', fontWeight: '700', }}>Acing the Game</h3>
          <br />
          <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>Rockace prides itself on being an unstoppable powerhouse that caters to the niche requirements of the casino game development industry and strives for innovation and excellence at every step of the way. Tried and tested workflows-in combination with strategic checks and balances-help us accomplish a quick turnaround for leading gaming brands in global markets. </p>
          <br />

          <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>

            Our solutions are nurtured and developed with utmost attention to detail by a handpicked team of industry veterans. While each member of our team brings a unique skillset to the table, what makes us tick is our shared passion for quality work and our unwavering professionalism. </p>
          <br />
          <p style={{ display: 'block', color: '#fff', textAlign: 'center', fontSize: '18px', margin: '0 0 30px 0;', marginLeft: '10%', marginRight: '10%' }}>

            Our solutions are nurtured and developed with utmost attention to detail by a handpicked team of industry veterans. While each member of our team brings a unique skillset to the table, what makes us tick is our shared passion for quality work and our unwavering professionalism. </p>
        </div>

      </div>
      <section style={{ background: 'rgba(0,0,0,0.3', height: 'auto', overflow: 'hidden' }}>
        <div className="container" style={{ width: '70%' }}>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ width: '100%' }}>
            <source src="images/Rockace_Promo_Animation.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

    </div>
  )
}


