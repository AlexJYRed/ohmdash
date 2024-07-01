import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ailments from '../../../ailments.json';
import Link from 'next/link';
import RootLayout from '../../app/layout';
import SummaryStats from '../../app/components/SummaryStats';

const chargerImages = {
  "Admin-HQ-Charger-002": "https://m.media-amazon.com/images/I/61qyH+7K6AL._AC_UF894,1000_QL80_.jpg",
  "Admin-Second-Site-Charger-001": "https://www.cnet.com/a/img/resize/e8aca7d90e5a230e42be7262df1dfa76163e67d5/hub/2022/03/07/64ae327b-4478-4893-b46b-49a15920a35e/dsc02028.jpg?auto=webp&width=1920",
  "Admin-HQ-Charger-003": "https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg",
  "Admin-HQ-Charger-001": "https://m.media-amazon.com/images/I/61ZBEiQ1EVL.jpg",
  "Admin-Second-Site-Charger-002": "https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg",
  "Admin-Second-Site-Charger-003": "https://m.media-amazon.com/images/I/71exSgr9XWL._AC_UF894,1000_QL80_.jpg",
};

const SiteDetails = () => {
  const router = useRouter();
  const { siteId } = router.query;
  const [siteData, setSiteData] = useState({ chargers: [], issues: [] });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('chargers');
  const [ailmentsData, setAilmentsData] = useState<Ailment[]>([]);

  useEffect(() => {
    if (siteId) {
      const filteredAilments = ailments.filter(ailment => ailment.siteID === siteId);
      setAilmentsData(filteredAilments);
      const chargerData = filteredAilments.reduce((acc, ailment) => {
        const charger = acc[ailment.chargerID] || {
          id: ailment.chargerID,
          imageUrl: chargerImages[ailment.chargerID],
          hasFunctionalityIssue: false
        };

        if (!ailment.resolved && ailment.functionality) {
          charger.hasFunctionalityIssue = true;
        }

        acc[ailment.chargerID] = charger;
        return acc;
      }, {});

      const chargers = Object.values(chargerData);
      
      const issues = filteredAilments.map(ailment => ({
        id: ailment.ailmentID,
        description: ailment.ailment_desc,
        reportedDate: new Date(ailment.date_created * 1000).toLocaleDateString("en-US"),
        resolved: ailment.resolved,
        functionality: ailment.functionality,
        image: ailment.ailment_image
      }));

      setSiteData({ chargers, issues });
      setLoading(false);
    }
  }, [siteId]);

  if (loading) return <div>Loading...</div>;

  return (
    <RootLayout>
      <h1>{siteId}</h1>
      <SummaryStats ailments={ailmentsData} />
      <div style={{
        display: 'flex',
     //   backgroundColor: '#333', // Dark gray like the header
        justifyContent: 'space-evenly',
        padding: '10px 0' // Added vertical padding
      }}>
        <button
          onClick={() => setViewMode('chargers')}
          style={{
            flex: 1,
            borderRight: '1px solid white',
            backgroundColor: '#333',
            color: 'white',
            fontWeight: viewMode === 'chargers' ? 'bold' : 'normal',
            padding: '12px 0' // Added more padding for text
          }}
        >
          View All Chargers
        </button>
        <button
          onClick={() => setViewMode('issues')}
          style={{
            flex: 1,
            backgroundColor: '#333',
            color: 'white',
            fontWeight: viewMode === 'issues' ? 'bold' : 'normal',
            padding: '12px 0' // Consistent padding
          }}
        >
          View All Issues
        </button>
        <button
          onClick={() => setViewMode('issues')}
          style={{
            flex: 1,
            backgroundColor: '#333',
            color: 'white',
            fontWeight: viewMode === 'issues' ? 'bold' : 'normal',
            padding: '12px 0' // Consistent padding
          }}
        >
          More Summary Statistics
        </button>
      </div>
      {viewMode === 'chargers' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {siteData.chargers.map(charger => (
            <Link key={charger.id} href={`/chargers/${charger.id}`}>
              <div style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '10px',
                  border: `3px solid ${charger.hasFunctionalityIssue ? 'red' : 'yellow'}`,
                  marginBottom: '10px',
                  width: '100px'
              }}>
                <img src={charger.imageUrl} alt={charger.id} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                <p style={{ color: 'black' }}>{charger.id}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {siteData.issues.map(issue => (
            <div key={issue.id} style={{
              width: '80%', // Ensures all boxes are the same width
              border: '3px solid ' + (issue.functionality ? 'red' : 'yellow'), // Color coding based on issue severity
              padding: '20px',
              margin: '10px 0',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
              <img src={issue.image} alt="Issue" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div style={{ flex: '1' }}>
                <h3>{issue.description}</h3>
                <p>Reported on: {issue.reportedDate}</p>
                <p>Status: {issue.resolved ? 'Resolved' : 'Unresolved'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </RootLayout>
  );
};

export default SiteDetails;