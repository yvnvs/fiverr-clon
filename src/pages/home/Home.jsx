import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards,projects } from "../../data";
import "./Home.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card}></CategoryCard>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              {" "}
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>

          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card}></ProjectCard>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
