"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ailments from '../../../ailments.json';
import Link from 'next/link';
import RootLayout from './../../app/layout';

const SiteDetails = () => {
  const router = useRouter();
  const { siteId } = router.query;
  const [siteData, setSiteData] = useState({ chargers: [], issues: [] });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('chargers');

  const chargerImages = {
    "Admin-HQ-Charger-002": "https://m.media-amazon.com/images/I/61qyH+7K6AL._AC_UF894,1000_QL80_.jpg",
    "Admin-Second-Site-Charger-001": "https://www.cnet.com/a/img/resize/e8aca7d90e5a230e42be7262df1dfa76163e67d5/hub/2022/03/07/64ae327b-4478-4893-b46b-49a15920a35e/dsc02028.jpg?auto=webp&width=1920",
    "Admin-HQ-Charger-003": "https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg",
    "Admin-HQ-Charger-001": "https://m.media-amazon.com/images/I/61ZBEiQ1EVL.jpg",
    "Admin-Second-Site-Charger-002": "https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg",
    "Admin-Second-Site-Charger-003": "https://m.media-amazon.com/images/I/71exSgr9XWL._AC_UF894,1000_QL80_.jpg",
  };

  useEffect(() => {
    if (siteId) {
      const filteredAilments = ailments.filter(ailment => ailment.siteID === siteId);
      const chargerData = filteredAilments.reduce((acc, ailment) => {
        const charger = acc[ailment.chargerID] || {
          id: ailment.chargerID,
          imageUrl: chargerImages[ailment.chargerID],
          hasIssue: false
        };

        if (!ailment.resolved) {
          charger.hasIssue = true; // Flag for severity based on unresolved issues
        }

        acc[ailment.chargerID] = charger;
        return acc;
      }, {});

      const chargers = Object.values(chargerData);
      const issues = filteredAilments.map(ailment => ({
        id: ailment.ailmentID,
        description: ailment.ailment_desc,
        reportedDate: new Date(ailment.date_created * 1000).toLocaleDateString("en-US"),
        resolved: ailment.resolved
      }));

      setSiteData({ chargers, issues });
      setLoading(false);
    }
  }, [siteId]);

  if (loading) return <div>Loading...</div>;

  return (
    <RootLayout>
      <h1>Site Details: {siteId}</h1>
      <div>
        <h2>Summary Statistics</h2>
        {/* Summary stats here */}
      </div>
      <div>
        <button onClick={() => setViewMode('chargers')}>View All Chargers</button>
        <button onClick={() => setViewMode('issues')}>View All Issues</button>
      </div>
      {viewMode === 'chargers' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {siteData.chargers.map(charger => (
            <Link key={charger.id} href={`/chargers/${charger.id}`}>
                <img src={charger.imageUrl} alt={charger.id} style={{ width: '100px', height: '100px' }} />
                <p>{charger.id}</p>
            </Link>
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
      
    </RootLayout>
  );
};

export default SiteDetails;
