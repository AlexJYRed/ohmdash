const SiteSummaryStats = ({ site, chargerIssueCount }) => {
    return (
      <div style={{ border: '1px solid black', padding: '10px', flex: 1 }}>
        <h2>{site}</h2>
        <p>Total Chargers with Issues: {chargerIssueCount}</p>
      </div>
    );
  };
  
  export default SiteSummaryStats;
  