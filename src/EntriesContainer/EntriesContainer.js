import React from "react";
import './EntriesContainer.css';
import Entry from "../Entry/Entry";

const EntriesContainer = ({entries}) => {
  return(
  <div className="entries-container">
    {entries.map((entry) => {
      return (
        <div className="entry-data-container" key={entry.id}>
          <Entry
            companyName={entry.client_name}
            projectName={entry.project_name}
            totalHours={entry.total_hours}
            billableHours={entry.billable_hours}
            billableAmount={entry.total_billable_amount}
          />
        </div>
      );
    })}
  </div>)
}

export default EntriesContainer;