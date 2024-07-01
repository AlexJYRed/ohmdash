import React from 'react';

const SummaryStats = ({ ailments }) => {
  // Calculate total issues
  const totalIssues = ailments.length;

  // Calculate total chargers with issues
  const chargerIssuesSet = new Set(ailments.map(ailment => ailment.chargerID));
  const totalChargersWithIssues = chargerIssuesSet.size;

  // Calculate total non-functional chargers
  const nonFunctionalChargers = new Set(
    ailments.filter(ailment => ailment.functionality).map(ailment => ailment.chargerID)
  );
  const totalNonFunctionalChargers = nonFunctionalChargers.size;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px', padding: '10px', backgroundColor: '#f2f2f2' }}>
      <div style={{ flex: 1, padding: '10px', borderRight: '2px solid #ccc' }}>
        <h2 style={{ fontSize: '24px' }}>Total Issues: {totalIssues}</h2>
      </div>
      <div style={{ flex: 1, padding: '10px', borderRight: '2px solid #ccc' }}>
        <h2 style={{ fontSize: '20px' }}>Chargers with Issues: {totalChargersWithIssues}</h2>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <h2 style={{ fontSize: '16px' }}>Non-Functional Chargers: {totalNonFunctionalChargers}</h2>
      </div>
    </div>
  );
};

export default SummaryStats;
