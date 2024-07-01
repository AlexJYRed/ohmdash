import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ailments from '../../../ailments.json';
import Link from 'next/link';
import RootLayout from '@/app/layout';

const ChargerDetailsPage = () => {
  const router = useRouter();
  const { chargerId } = router.query;
  const [chargerDetails, setChargerDetails] = useState([]);
  const [siteName, setSiteName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chargerId) {
      const relatedAilments = ailments.filter(ailment => ailment.chargerID === chargerId);
      setChargerDetails(relatedAilments);
      if (relatedAilments.length > 0) {
        setSiteName(relatedAilments[0].siteID);
      }
      setLoading(false);
    }
  }, [chargerId]);

  if (loading) return <div>Loading...</div>;

  return (
    <RootLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={`/sites/${encodeURIComponent(siteName)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {siteName}
        </Link>
        <h1 style={{ textAlign: 'center' }}>{chargerId}</h1>
      </div>
      {chargerDetails.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {chargerDetails.map((ailment, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              border: `3px solid ${ailment.functionality ? 'red' : 'yellow'}`,
              padding: '10px',
              borderRadius: '10px',
              backgroundColor: 'white',
              marginBottom: '10px'
            }}>
              <img src={ailment.ailment_image} alt="Issue" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h3>{ailment.ailment_type}</h3>
                <p>Description: {ailment.ailment_desc}</p>
                <p>Resolved: {ailment.resolved ? 'Yes' : 'No'}</p>
                <p>Date Reported: {new Date(ailment.date_created * 1000).toLocaleDateString("en-US")}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No issues reported for this charger.</p>
      )}
    </RootLayout>
  );
};

export default ChargerDetailsPage;
