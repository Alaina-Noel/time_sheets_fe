import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-column-1 banner-column">Name</div>
      <div className="banner-column-2 banner-column">Clients</div>
      <div className="banner-column-3 banner-column">Hours</div>
      <div className="banner-column-4 banner-column">Billable Hours</div>
      <div className="banner-column-4 banner-column">Billable Amount</div>
    </div>
  );
}

export default Banner;
