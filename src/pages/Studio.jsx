import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';

const Studio = () => {
  useReveal();
  useTilt();

  return (
    <>
      {/* Studio Hero */}
      <header className="studio-header gradient-bg fade-down">
        <div className="container text-center">
          <h1 className="page-title reveal-text">Our Process</h1>
          <p className="page-subtitle reveal-text delay-1">From precise 2D drafting to breathtaking 3D reality.</p>
        </div>
      </header>

      {/* Process Section */}
      <section className="section studio-process" id="process">
        <div className="container">
          
          {/* Step 1 to 2 Visualization */}
          <div className="split-layout reverse process-step fade-up">
            <div className="split-content">
              <span className="step-num">01.</span>
              <h2>2D Drafting & Architecture</h2>
              <p>Every masterpiece begins with precision. We meticulously develop comprehensive 2D floor plans, elevations, and CAD drafting. This stage guarantees absolute dimensional accuracy to adhere strictly to your architectural specifications.</p>
            </div>
            <div className="split-image tilt-card">
              <div className="drafting-image-wrapper">
                <img src="/images/studio_drafting_1773475896621.png" alt="2D Drafting Process" />
                <div className="image-reveal"></div>
              </div>
            </div>
          </div>
          
          {/* Step 2 to 3 Visualization */}
          <div className="split-layout process-step mt-6 fade-up">
            <div className="split-content">
              <span className="step-num">02.</span>
              <h2>3D Modeling & Lighting</h2>
              <p>Translating lines into volumes. We build 3D geometry meticulously. Through advanced texture mapping, physical material property simulation, and calculating realistic global illumination, scenes come alive. The ambiance is crafted utilizing deep charcoal shadows and striking golden highlights.</p>
            </div>
            <div className="split-image tilt-card">
              <div className="drafting-image-wrapper">
                <img src="/images/render_living_room_1773475808657.png" alt="3D Modeling Output" />
                <div className="image-reveal"></div>
              </div>
            </div>
          </div>

          {/* Step 3 Final Render */}
          <div className="split-layout reverse process-step mt-6 fade-up">
            <div className="split-content">
              <span className="step-num">03.</span>
              <h2>Post Production & Final Render</h2>
              <p>The final polish. Adding cinematic flares, atmospheric depth, and perfect color grading. This translates the architectural idea into an irresistible, immersive, high-end visual product ready for your clientele.</p>
            </div>
            <div className="split-image tilt-card">
              <div className="drafting-image-wrapper">
                <img src="/images/render_office_building_1773475823040.png" alt="Final Render Production" />
                <div className="image-reveal"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Studio;
