"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import users from '../../users.json';
import ailments from '../../ailments.json';
import ChargerDetails from "./components/ChargerDetails";

type Ailment = {
  id: number;
  site: string;
  charger: string;
  status: string;
  date: string;
  issue: string;
  resolved: boolean;
  clientID: string;  // Assuming the type definitions include this based on your JSON structure
};

export default function Home() {
  const [ailmentsData, setAilmentsData] = useState<Ailment[]>([]);
  const [selectedSite, setSelectedSite] = useState('');
  const [selectedCharger, setSelectedCharger] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const storedUsername = localStorage.getItem('username');

  useEffect(() => {
    if (!storedUsername) {
      router.push('/login');
      return;
    }
  
    // Print all client IDs for debugging
    console.log("All client IDs:", ailments.map(a => a.clientID));
  
    // Filter ailments based on the logged-in user's clientID
    const userAilments = ailments.filter(ailment => ailment.clientID === storedUsername);
    console.log("Filtered Ailments for user:", userAilments);
  
    setAilmentsData(userAilments);
    console.log("Ailments Data set for user:", userAilments);
    setLoading(false);
  }, []);
  

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
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
  
    const handleChargerChange = (event) => {
      setSelectedCharger(event.target.value);
      console.log("Charger selected:", event.target.value);
      };

  const filteredAilments = ailmentsData.filter(ailment => {
    return (selectedSite && ailment.siteID === selectedSite) &&
           (!selectedCharger || ailment.chargerID === selectedCharger);
  });

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
      <div className="filters">
        <select onChange={handleSiteChange} value={selectedSite || ''}>
          <option value="">Select Site</option>
          {[...new Set(ailmentsData.map(ailment => ailment.siteID))].map(site => (
            <option key={site} value={site}>{site}</option>
          ))}
        </select>
        <select onChange={handleChargerChange} value={selectedCharger || ''} disabled={!selectedSite}>
          <option value="">Select Charger</option>
          {chargerOptions.map(chargerID => (
            <option key={chargerID} value={chargerID}>{chargerID}</option>
          ))}
        </select>
      </div>
      {selectedSite && <ChargerDetails ailments={filteredAilments} selectedSite={selectedSite} selectedCharger={selectedCharger} />}
      
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
      <style jsx>{`.container { 
        display: flex; 
        flex-direction: column; height: 100vh; background-color: white; } header { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background-color: #333; color: white; } .menu-button { font-size: 24px; background: none; border: none; color: white; cursor: pointer; } .sidebar { position: fixed; top: 0; left: 0; width: 250px; height: 100%; background-color: #444; color: white; transform: translateX(-100%); transition: transform 0.3s ease-in-out; } .sidebar.open { transform: translateX(0); } nav ul { list-style: none; padding: 0; } nav ul li { padding: 15px 20px; cursor: pointer; } main { flex: 1; padding: 20px; display: flex; flex-direction: column; } .filters { display: flex; gap: 10px; margin-bottom: 20px; } .filters select { padding: 10px; border: 1px solid #ccc; border-radius: 5px; } .info-boxes { display: flex; gap: 20px; } .info-box { flex: 1; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; } .info-box h2 { margin-top: 0; } .info-box button { display: block; margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff; cursor: pointer; } .info-box button:hover { background-color: #f0f0f0; } `}</style>
    </div>
  );
}
