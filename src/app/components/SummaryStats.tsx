const SummaryStats = ({ data }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', padding: '10px', backgroundColor: '#f2f2f2' }}>
        <div style={{ marginRight: '20px' }}>
          <h3>Total Issues: {data.totalIssues}</h3>
          <h3>Chargers Down: {data.chargersDown}</h3>
        </div>
        <div>
          <h3>System Uptime: {data.uptime}</h3>
          <h3>Last Issue: {data.lastSiteIssueTime}</h3>
        </div>
      </div>
    );
  };
  
  export default SummaryStats;
  