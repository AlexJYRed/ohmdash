"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import users from '../../users.json';
import ailments from '../../ailments.json';
import ChargerDetails from "./components/ChargerDetails";
import SummaryStats from './components/SummaryStats';
import SiteListView from './components/SiteListView'; // This will be a new component
import SiteSummaryStats from "./components/SiteSummaryStats";
import ChargerGrid from './components/ChargerGrid';

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




export default function Home() {
  const [ailmentsData, setAilmentsData] = useState<Ailment[]>([]);
  const [selectedChargerID, setSelectedChargerID] = useState(null);
  const [filteredAilments, setFilteredAilments] = useState<Ailment[]>([]);
  const [chargerIssueCount, setChargerIssueCount] = useState(0);
  const [selectedSite, setSelectedSite] = useState('');
  const [sitesWithIssues, setSitesWithIssues] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const storedUsername = localStorage.getItem('username');

  const chargerImages = {
    "Admin-HQ-Charger-002": "https://m.media-amazon.com/images/I/61qyH+7K6AL._AC_UF894,1000_QL80_.jpg",
    "Admin-Second-Site-Charger-001": "https://www.cnet.com/a/img/resize/e8aca7d90e5a230e42be7262df1dfa76163e67d5/hub/2022/03/07/64ae327b-4478-4893-b46b-49a15920a35e/dsc02028.jpg?auto=webp&width=1920",
    "Admin-HQ-Charger-003": "https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg",
    "Admin-HQ-Charger-001": "https://m.media-amazon.com/images/I/61ZBEiQ1EVL.jpg",
    "Admin-Second-Site-Charger-002": "https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg",
    "Admin-Second-Site-Charger-003": "https://m.media-amazon.com/images/I/71exSgr9XWL._AC_UF894,1000_QL80_.jpg",
  };

  const summaryData = {
    totalIssues: 9,
    chargersDown: 2,
    uptime: '93%',
    lastSiteIssueTime: 'Yesterday 16:24'
  };

  const handleChargerSelection = (chargerID) => {
    console.log("Selected Charger:", chargerID);
    setSelectedChargerID(chargerID); // To use for displaying the full biography
  };
  
  useEffect(() => {
    if (!storedUsername) {
      router.push('/login');
      return;
    }
  
    // Filter ailments based on the logged-in user's clientID
    const userAilments = ailments.filter(ailment => ailment.clientID === storedUsername);
  
    // Aggregate issue counts per site
    const siteIssueCounts = userAilments.reduce((acc, ailment) => {
      const siteKey = ailment.siteID; // Correcting to 'site' from 'siteID'
      if (acc[siteKey]) {
        acc[siteKey]++;
      } else {
        acc[siteKey] = 1;
      }
      return acc;
    }, {});
  
    // Transform the object into an array suitable for the SiteListView component
    const sites = Object.keys(siteIssueCounts).map(siteID => ({
      siteID,
      issues: siteIssueCounts[siteID]
    }));
    setSitesWithIssues(sites);

    if (selectedSite) {
      const issuesAtSite = userAilments.filter(ailment => ailment.siteID === selectedSite);
      const chargersWithIssues = new Set(issuesAtSite.map(ailment => ailment.chargerID));
      setChargerIssueCount(chargersWithIssues.size); 
      console.log("Issues at site: ", issuesAtSite); // Check if this returns the correct issues
      setFilteredAilments(issuesAtSite);
    }


    setLoading(false);
    
  }, [selectedSite, ailmentsData, storedUsername]);
  

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Clear token
    localStorage.removeItem('username'); // Clear stored username
    router.push('/login'); // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSiteChange = (event) => {
    setSelectedSite(event.target.value);
    setSelectedCharger(null);  // Reset charger selection when site changes
    console.log("Site selected:", event.target.value);
  };
  
  const chargerOptions = ailmentsData
    .filter(ailment => ailment.siteID === selectedSite)
    .map(ailment => ailment.chargerID)
    .filter((value, index, self) => self.indexOf(value) === index);
  
  const handleChargerChange = (event) => {
    setSelectedCharger(event.target.value);
    console.log("Charger selected:", event.target.value);
    };

  return (
    <div className="container">
      <header>
        <button
          className={`menu-button ${sidebarOpen ? 'menu-button-shifted' : ''}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >☰</button>
        <h1>OhmEV Dashboard - Welcome, {storedUsername}</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Details</li>
            <li>Maintenance</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <main>
      <SummaryStats data={summaryData} />
      <div className="site-selection">
        <SiteListView sites={sitesWithIssues} onSelectSite={setSelectedSite} />
        {selectedSite && <SiteSummaryStats site={selectedSite} chargerIssueCount={chargerIssueCount} />}
        <div className="charger-grid">
          {selectedSite && (
            <ChargerGrid
              ailments={filteredAilments}
              onSelectCharger={handleChargerSelection}
            />
          )}
        </div>
      </div>
      {selectedChargerID && <ChargerDetails ailments={ailments} selectedSite={selectedSite} selectedCharger={selectedChargerID} />}
    
      <div className="info-boxes">
        <div className="info-box">
          <h2>Charger Status Summary</h2>
          <div>Total Chargers: {ailmentsData.length}</div>
          <div>Chargers in Use: {ailmentsData.filter(ailment => ailment.status === 'in use').length}</div>
          <div>Chargers Available: {ailmentsData.filter(ailment => ailment.status === 'available').length}</div>
          <div>Chargers Under Maintenance: {ailmentsData.filter(ailment => ailment.status === 'maintenance').length}</div>
        </div>
        <div className="info-box">
          <h2>Recent Activity</h2>
          <ul>
            {filteredAilments.map(ailment => (
              <li key={ailment.id}>
                {ailment.date}: {ailment.issue} - {ailment.resolved ? 'Resolved' : 'Outstanding'}
              </li>
            ))}
          </ul>
        </div>
        <div className="info-box">
          <h2>Quick Actions</h2>
          <button>Add New Charger</button>
          <button>Schedule Maintenance</button>
          <button>Generate Report</button>
        </div>
      </div>
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
//   .charger-grid {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// }
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
}
