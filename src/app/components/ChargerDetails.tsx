import React from 'react';

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
  functionality: boolean;
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
  console.log("Selected Site:", selectedSite);
  console.log("Selected Charger:", selectedCharger);
  console.log("Ailments Data:", ailments);

  const relevantAilments = ailments.filter(ailment => ailment.siteID === selectedSite && ailment.chargerID === selectedCharger);
  console.log("Relevant Ailments:", relevantAilments);

  const borderStyle = (functionality: boolean) => ({
    border: `3px solid ${functionality ? 'red' : 'yellow'}`,
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white'
  });

  return (
    <div style={{
      color: 'black',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'white', // Neutral background for the container
      border: '1px solid darkgrey',
      borderRadius: '10px'
    }}>
      <h1>{selectedCharger}</h1>
      {relevantAilments.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {relevantAilments.map((ailment, index) => (
            <div key={index} style={borderStyle(ailment.functionality)}>
              <img src={ailment.ailment_image} alt="Issue Visual" style={{ width: '100px', height: 'auto', marginRight: '10px' }}/>
              <div>
                <h4>{ailment.ailment_type}</h4>
                <p>{ailment.ailment_desc}</p>
                <p>Date Reported: {new Date(ailment.date_created * 1000).toLocaleString("en-US")}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No current issues reported for this charger.</p>
      )}
    </div>
  );
};

export default ChargerDetails;
