const chargerImages = {
    "Admin-HQ-Charger-001": "https://m.media-amazon.com/images/I/61ZBEiQ1EVL.jpg",
    "Admin-HQ-Charger-002": "https://m.media-amazon.com/images/I/61qyH+7K6AL._AC_UF894,1000_QL80_.jpg",
    "Admin-HQ-Charger-003": "https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg",
    "Admin-Second-Site-Charger-001": "https://www.cnet.com/a/img/resize/e8aca7d90e5a230e42be7262df1dfa76163e67d5/hub/2022/03/07/64ae327b-4478-4893-b46b-49a15920a35e/dsc02028.jpg?auto=webp&width=1920",
    "Admin-Second-Site-Charger-002": "https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg",
    "Admin-Second-Site-Charger-003": "https://m.media-amazon.com/images/I/71exSgr9XWL._AC_UF894,1000_QL80_.jpg",
  };
  const ChargerGrid = ({ ailments, onSelectCharger }) => {
    const chargers = ailments.reduce((acc, ailment) => {
      const chargerKey = ailment.chargerID;  // Ensure this key matches what's in your data
      if (!acc[chargerKey]) {
        acc[chargerKey] = {
          chargerID: chargerKey,
          functionalityIssues: false, // No functionality issues initially
          imageUrl: chargerImages[chargerKey] || 'https://example.com/default-charger.jpg'
        };
      }
      // If there is a functionality issue (functionality: true), mark as having functionality issues
      if (ailment.functionality) {
        acc[chargerKey].functionalityIssues = true;
      }
      return acc;
    }, {});
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
        {Object.values(chargers).map(charger => (
          <div key={charger.chargerID}
               onClick={() => onSelectCharger(charger.chargerID)}
               style={{
                 width: 'calc(33.333% - 10px)',
                 border: `3px solid ${charger.functionalityIssues ? 'red' : 'yellow'}`,
                 padding: '10px',
                 cursor: 'pointer',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center'
               }}>
            <img src={charger.imageUrl} alt={charger.chargerID} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <p>{charger.chargerID}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChargerGrid;
  