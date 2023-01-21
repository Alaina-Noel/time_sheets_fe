import React from "react";
import './Banner.css'

const Banner = () => {
  return(
    <div className="banner-container">
      <div className="banner-column-1">Name</div>
      <div className="banner-column-2">Clients</div>
      <div className="banner-column">Hours</div>
      <div className="banner-column">Billable Hours</div>
      <div className="banner-column">Billable Amount</div>
    </div>
  )
}

export default Banner;