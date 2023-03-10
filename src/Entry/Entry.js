import React from 'react';
import './Entry.css';

function Entry({
  companyName, projectName, totalHours, billableHours, billableAmount,
}) {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const billableAmountDisplayed = numberFormat.format(billableAmount);

  return (
    <div className="entry-card">
      <div className="projectName" style={{ gridColumn: '1/2' }}>{projectName}</div>
      <div className="companyName" style={{ gridColumn: '2/3' }}>{companyName}</div>
      <div className="totalHours" style={{ gridColumn: '3/4' }}>{totalHours.toFixed(2)}</div>
      <div className="billableHours" style={{ gridColumn: '4/5' }}>
        <strong>{billableHours.toFixed(2)}</strong>
        (
        {Math.round((billableHours / totalHours) * 100)}
        %)
      </div>
      <div className="billableAmount" style={{ gridColumn: '5/6' }}>{billableAmountDisplayed}</div>
    </div>
  );
}

export default Entry;
