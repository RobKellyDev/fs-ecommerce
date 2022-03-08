import React from "react";
import coverGirl from "../assets/images/videos/covergirl.png";
import walkingGirl from "../assets/images/videos/walking-girl.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>

      <div className="offcanvas-wrap position-relative">

        {/* hero */}
        <section className="cover overflow-hidden inverted bg-black">
          <div className="d-flex flex-column h-35 container py-10">
            <div className="row justify-content-center my-auto">

              <div className="col-md-8 text-center position-fixed top-50">
                <span className="eyebrow text-danger opacity-50">New Collection</span>
                <h1 className="display-2 lh-sm fw-bold">Spring Jacket.</h1>
                <Link to="" className="btn btn-outline-white rounded-pill opacity-50">
                  ByBye Collection
                </Link>
              </div>

            </div>
            <div className="row text-center">
              <div className="col">
                <small className="fs-text-secondary eyebrow text-secondary opacity-100 px-2 lh">
                  Limited Time Only -&nbsp;<span style={{padding: "0 5px", color:"darkred", opacity: 1}}>Jacket Only</span> -&nbsp; For Sale Now £197
                </small>
              </div>
            </div>
          </div>
          <div
            className="background background-overlay"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <video
              controls
              poster={coverGirl}
              width="400"
              height="320"
              autoPlay={true}
              muted={true}
              loop={true}
              style={{width: "100%", height:"100%"}}
            >
              <source src={walkingGirl} />
            </video>
          </div>
        </section>
       

        
       

      </div>
    </>
  );
};

export default Home;
