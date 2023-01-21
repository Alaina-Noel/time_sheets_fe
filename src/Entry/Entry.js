import React from "react";
import './Entry.css'

const Entry = ({companyName, projectName, totalHours, billableHours, billableAmount }) => {
  return(
    <div className='entry-card'>
        <div className='companyName' style={{gridColumn: "1/2"}}>{companyName}</div>
        <div className='projectName' style={{gridColumn: "2/3"}}>{projectName}</div>
        <div className='totalHours' style={{gridColumn: "3/4"}}>{Math.round(totalHours)}</div>
        <div className='billableHours' style={{gridColumn: "4/5"}}>{Math.round(billableHours, 1)}</div>
        <div className='billableAmount' style={{gridColumn: "5/6"}}>${Math.round(billableAmount, 1)}</div>
    </div>
  )
}

export default Entry;