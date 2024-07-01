"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ailmentsData from '../../ailments.json';
import ChargerDetails from "./components/ChargerDetails";
import SummaryStats from './components/SummaryStats';
import SiteListView from './components/SiteListView';
import SiteSummaryStats from "./components/SiteSummaryStats";
import ChargerGrid from './components/ChargerGrid';

const Home = () => {
  const router = useRouter();
  const [selectedChargerID, setSelectedChargerID] = useState(null);
  const [selectedSite, setSelectedSite] = useState('');
  const [userData, setUserData] = useState({
    ailments: [],
    sitesWithIssues: [],
    chargerIssueCount: 0,
    siteAilments: []
  });
  const [loading, setLoading] = useState(true);
  const storedUsername = localStorage.getItem('username');

  useEffect(() => {
    if (!storedUsername) {
      router.push('/login');
      return;
    }

    const userAilments = ailmentsData.filter(ailment => ailment.clientID === storedUsername);

    // Aggregate issue counts per site
    const siteIssueCounts = {};
    userAilments.forEach(ailment => {
      siteIssueCounts[ailment.siteID] = (siteIssueCounts[ailment.siteID] || 0) + 1;
    });

    // Create list of sites with issues
    const sites = Object.keys(siteIssueCounts).map(siteID => ({
      siteID,
      issues: siteIssueCounts[siteID]
    }));

    const siteAilments = selectedSite ? userAilments.filter(ailment => ailment.siteID === selectedSite) : [];
    const chargersWithIssues = new Set(siteAilments.map(ailment => ailment.chargerID));

    setUserData({
      ailments: userAilments,
      sitesWithIssues: sites,
      chargerIssueCount: chargersWithIssues.size,
      siteAilments: siteAilments
    });

    setLoading(false);
  }, [selectedSite, storedUsername]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    router.push('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <main>
        <SummaryStats ailments={userData.ailments} />
        <div className="site-selection">
        <SiteListView sites={userData.sitesWithIssues} onSelectSite={setSelectedSite} />
        {selectedSite && <SiteSummaryStats site={selectedSite} chargerIssueCount={userData.chargerIssueCount} />}
        <div className="charger-grid">
          {selectedSite && (
        <ChargerGrid ailments={userData.siteAilments} onSelectCharger={setSelectedChargerID} />)}
        </div>
        </div>
        {selectedChargerID && <ChargerDetails ailments={ailmentsData} selectedSite={selectedSite} selectedCharger={selectedChargerID} />}
      </main>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%; /* Ensure full width */
          margin: 0; /* Remove any default margin */
          background-color: white;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #333;
          color: white;
        }
        .menu-button {
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease-in-out; /* Smooth transition */
        }
        .menu-button-shifted {
          transform: translateX(250px); /* Move button to the right */
        }
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          background-color: #444;
          color: white;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .sidebar.open {
          transform: translateX(0);
        }
        nav ul {
          list-style: none;
          padding: 0;
        }
        nav ul li {
          padding: 15px 20px;
          cursor: pointer;
        }
        main {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          overflow: auto; /* Ensure scrolling if content overflows */
        }
         .site-selection {
  display: flex;
  gap: 20px;
}

.site-summary-stats, .charger-grid {
  flex: 1;
  padding: 10px;
  min-height: 300px; // Minimum height for layout stability
  border-left: 1px solid black; // Separate columns visually
}
        .filters {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .filters select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .info-boxes {
          display: flex;
          gap: 20px;
          flex-wrap: wrap; /* Allow wrapping if needed */
        }
        .info-box {
          flex: 1;
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .info-box h2 {
          margin-top: 0;
        }
        .info-box button {
          display: block;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
        }
        .info-box button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default Home;
