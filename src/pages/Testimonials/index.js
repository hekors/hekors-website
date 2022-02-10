import React from 'react';
import './testimonials-data.json';

export default function Testimonials() {
  return (
    <React.Fragment>
      <div className="testimonials-page">
        <div className="testimoinal-page-content-wrapper content-center">
          <div className="testimonial-page__hero-section">
            <h2 style={{ marginBottom: '1rem' }}>Our Testimonials</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}