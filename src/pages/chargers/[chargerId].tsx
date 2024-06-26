import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ailments from '../../../ailments.json';
import RootLayout from '@/app/layout';

const ChargerDetailsPage = () => {
  const router = useRouter();
  const { chargerId } = router.query;  // Use Next.js's useRouter hook to get the query parameter
  const [chargerDetails, setChargerDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chargerId) {
      // Fetch all ailments related to this charger ID
      const relatedAilments = ailments.filter(ailment => ailment.chargerID === chargerId);
      setChargerDetails(relatedAilments);
      setLoading(false);
    }
  }, [chargerId]);

  if (loading) return <div>Loading...</div>;

  return (
    <RootLayout>
      <h1>Charger Details: {chargerId}</h1>
      {chargerDetails.length > 0 ? (
        <ul>
          {chargerDetails.map((ailment, index) => (
            <li key={index}>
              <p>Issue: {ailment.ailment_type}</p>
              <p>Description: {ailment.ailment_desc}</p>
              <p>Resolved: {ailment.resolved ? 'Yes' : 'No'}</p>
              <p>Date Reported: {new Date(ailment.date_created * 1000).toLocaleDateString("en-US")}</p>
              {/* Additional details can be added here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No issues reported for this charger.</p>
      )}
    </RootLayout>
  );
};

export default ChargerDetailsPage;
