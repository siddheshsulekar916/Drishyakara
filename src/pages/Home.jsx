import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';

const Home = () => {
  useReveal();
  useTilt();

  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_poster_1773475791911.png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title reveal-text">DRISHYAKARA</h1>
          <p className="hero-subtitle reveal-text delay-1">We Bring Blueprints to Life.</p>
          <a href="#work" className="btn btn-primary reveal-text delay-2">Explore Our Work</a>
        </div>
      </header>

      {/* Work Section (Masonry Grid) */}
      <section className="section" id="work">
        <div className="container">
          <h2 className="section-title fade-up">Selected Architectural Renders</h2>
          <div className="masonry-grid fade-up delay-1">
            <div className="masonry-item">
              <img src="/images/render_living_room_1773475808657.png" alt="Luxury Living Room" />
              <div className="item-overlay"><span>Interior Concept</span></div>
            </div>
            <div className="masonry-item">
              <img src="/images/render_office_building_1773475823040.png" alt="Office Building Exterior" />
              <div className="item-overlay"><span>Commercial Exterior</span></div>
            </div>
            <div className="masonry-item tall">
              <img src="/images/render_bedroom_1773475841212.png" alt="Minimalist Bedroom" />
              <div className="item-overlay"><span>Minimalist Suite</span></div>
            </div>
            <div className="masonry-item wide">
              <img src="/images/render_kitchen_1773475880488.png" alt="Modern Kitchen" />
              <div className="item-overlay"><span>Luxury Kitchen</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours Section */}
      <section className="section dark-alt" id="tours">
        <div className="container">
          <div className="tours-content fade-up">
            <div className="tours-text">
              <h2 className="section-title">Immersive Virtual Tours</h2>
              <p>Step inside your future property before a single brick is laid. Our high-fidelity 360&deg; interactive experiences deliver absolute realism and detail, giving you total spatial awareness and control.</p>
              <Link to="/tour" className="btn btn-outline" id="start-tour-btn">Start Interactive Tour <span className="arrow">→</span></Link>
            </div>
            <div className="tours-display tilt-card">
              <Link to="/tour" className="tour-frame" style={{ display: 'block' }}>
                <img src="/images/virtual_tour_cover_1773475856358.png" alt="360 Virtual Tour Interface" />
                <div className="play-button pulse-anim"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
