import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Tour = () => {
  useReveal();

  return (
    <>
      {/* Tour Header */}
      <header className="tour-header fade-down">
        <div className="container text-center mt-6">
          <h1 className="page-title reveal-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '50px' }}>Luxury Penthouse Walkthrough</h1>
          <p className="page-subtitle reveal-text delay-1" style={{ marginBottom: '20px' }}>Explore every detail in 360&deg;</p>
        </div>
      </header>

      {/* iframe Tour Section */}
      <section className="section tour-iframe-section fade-up" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="iframe-container">
            <iframe 
              src="https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3CGG6HK7V&utm_source=light720_share&uri=%2Fpub%2Fsaas%2Fapps%2Fproject%2Fdetail%2F3FO3CGG6HK7V%3Fuid%3D3FO4FSY7WKC6&utm_content=3FO3CGG6HK7V&utm_medium=whatsapp" 
              frameBorder="0" 
              allowFullScreen 
              allow="xr-spatial-tracking; vr; gyroscope; accelerometer; fullscreen; autoplay; xr"
              title="3D Virtual Tour"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="section project-details dark-alt fade-up delay-1">
        <div className="container">
          <div className="details-grid">
            <div className="detail-block">
              <h3>Project Overview</h3>
              <p>This luxury penthouse project exemplifies the pinnacle of modern urban living. Designed with an emphasis on open spaces, natural light, and premium materials, the virtual walkthrough allows clients to experience the exact layout, material finishes, and lighting ambiance before construction begins or from anywhere in the world.</p>
            </div>
            <div className="detail-block specs">
              <h3>Specifications</h3>
              <ul>
                <li><strong>Type:</strong> Residential Penthouse</li>
                <li><strong>Area:</strong> 4,500 sq.ft</li>
                <li><strong>Style:</strong> Contemporary Modern</li>
                <li><strong>Materials:</strong> Italian Marble, Venetian Plaster, Brushed Gold</li>
                <li><strong>Completion:</strong> Q4 2026</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
