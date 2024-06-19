// ChargerDetails.tsx
import React from 'react';
import { ailments } from '../../../ailments.json'; // adjust the path as necessary

type Ailment = {
  ailmentID: string;
  siteID: string;
  chargerID: string;
  status: string;
  date: string;
  issue: string;
  resolved: boolean;
  clientID: string;
  ailment_type: string;
  ailment_desc: string;
  ailment_image: string;
  resolved_flag: boolean;
  partID?: string;
  date_created: number;
  date_resolved: number | null;
  identified_technicianID: number;
  resolved_technicianID?: number;
};

type ChargerDetailsProps = {
  ailments: Ailment[];
  selectedSite?: string;
  selectedCharger?: string;
};

const ChargerDetails: React.FC<ChargerDetailsProps> = ({ ailments, selectedSite, selectedCharger }) => {
  const relevantAilments = ailments.filter(ailment => {
    return (
      ailment.siteID === selectedSite &&
      (!ailment.date_resolved) &&
      (selectedCharger ? ailment.chargerID === selectedCharger : true)
    );
  });

  const hasIssues = relevantAilments.length > 0;

  return (
    <div style={{
      color: 'black',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'white', // Neutral background for the container
      border: '1px solid darkgrey',
      borderRadius: '10px'
    }}>
      <h2>Charger Status</h2>
      {hasIssues ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {relevantAilments.map((ailment, index) => (
            <div key={index} style={{ background: 'red', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
              <img src={ailment.ailment_image} alt="Issue Visual" style={{ width: '100px', height: 'auto', marginRight: '10px' }}/>
              <div>
                <h4>{ailment.ailment_type}</h4>
                <p>{ailment.ailment_desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No current issues.</p>
      )}
    </div>
  );
};

export default ChargerDetails;
