import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ailments from '../../../ailments.json';

const SiteDetails = () => {
  const { siteId } = useParams();
  const [siteData, setSiteData] = useState({ chargers: [], issues: [] });
  const [viewMode, setViewMode] = useState('chargers'); // View mode can be 'chargers' or 'issues'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSiteData = (siteId) => {
      const filteredAilments = ailments.filter(ailment => ailment.siteID === siteId);
      const chargers = filteredAilments.map(ailment => ({
        id: ailment.chargerID,
        status: ailment.status,
        issue: ailment.issue,
        resolved: ailment.resolved
      }));
      const issues = filteredAilments.map(ailment => ({
        id: ailment.ailmentID,
        description: ailment.ailment_desc,
        reportedDate: new Date(ailment.date_created * 1000).toLocaleDateString("en-US"),
        resolved: ailment.resolved
      }));
      return { chargers, issues };
    };

    const siteDetails = fetchSiteData(siteId);
    setSiteData(siteDetails);
    setLoading(false);
  }, [siteId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Site Details: {siteId}</h1>
      <div>
        <h2>Summary Statistics</h2>
        {/* Display various summary statistics here */}
      </div>
      <div>
        <button onClick={() => setViewMode('chargers')}>View All Chargers</button>
        <button onClick={() => setViewMode('issues')}>View All Issues</button>
      </div>
      {viewMode === 'chargers' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {siteData.chargers.map(charger => (
            <div key={charger.id} style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
              <p>Charger ID: {charger.id}</p>
              <p>Status: {charger.status}</p>
              <p>Issue: {charger.issue}</p>
              <p>Resolved: {charger.resolved ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {siteData.issues.map(issue => (
            <li key={issue.id}>
              <strong>{issue.description}</strong> - Reported on {issue.reportedDate} - Resolved: {issue.resolved ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SiteDetails;
