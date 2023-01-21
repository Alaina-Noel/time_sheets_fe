import React from "react";
import './Entry.css'

const Entry = ({ key, id, companyName, projectName, totalHours, billableHours, billableAmount }) => {
    return(
        <div className='entry-card'>
          {key}
          {id}
          {companyName}
        </div>
    )
}

export default Entry;