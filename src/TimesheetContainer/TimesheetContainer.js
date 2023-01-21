import React from "react";
import './TimesheetContainer.css';
import Entry from "../Entry/Entry";

const TimesheetContainer = ({entries, errorMessage}) => {
  <div className="entries-container">
      {entries.map((entry) => {
          return (
            <div className="entry-data-container" key={entry.id}>
              <Entry
                key={entry.id}
                id={entry.id}
                companyName={entry.company_name}
                projectName={entry.project_name}
                totalHours={entry.total_hours}
                billableHours={entry.total_billable_hours}
                billableAmount={entry.total_billable_amount}
               />
            </div>
          );
        }
      )}
    </div>
}

export default TimesheetContainer;