"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Supabase client setup
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

type Inspection = {
  id: number;
  site: string;
  charger: string;
  status: string;
  date: string;
  issue: string;
  resolved: boolean;
};

async function verifyCredentials(username: string | null, password: string | null) {
  console.log('Verifying credentials');
  if (!username || !password) return false;

  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const isAuthenticated = users.some(user => user.username === username && user.passwordHash === hashHex);
  console.log('Credentials verified:', isAuthenticated);
  return isAuthenticated;
}

export default function Home() {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('Component mounted, router is ready:', router.isReady);
    if (!router.isReady) return;

    async function checkAuthAndFetchData() {
      try {
        console.log('Checking authentication and fetching data...');
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        console.log(`Retrieved from localStorage - Username: ${storedUsername}, Password: ${storedPassword}`);
    
        if (!storedUsername || !storedPassword) {
          console.log('No credentials stored, redirecting to login...');
          router.push('/login');
          return;
        }
    
        const isAuthenticated = await verifyCredentials(storedUsername, storedPassword);
        console.log(`Is authenticated: ${isAuthenticated}`);
    
        if (!isAuthenticated) {
          console.log('Authentication failed, redirecting to login');
          router.push('/login');
        } else {
          console.log('Fetching inspections');
          const { data: inspections, error } = await supabase.from('inspections').select('*');
          if (error) {
            console.error('Error fetching inspections:', error);
          } else {
            setInspections(inspections as Inspection[]);
            console.log('Inspections fetched:', inspections);
          }
          setLoading(false);
        }
      } catch (error) {
        console.error('Error during authentication or data fetching:', error);
      }
    }    

    checkAuthAndFetchData();
  }, [router.isReady]);

  if (loading) {
    console.log('Displaying loading screen');
    return <div>Loading...</div>;
  }

  console.log('Rendering dashboard with data');
  return (
    <div className="container">
      <header>
      <button
    className={`menu-button ${sidebarOpen ? 'menu-button-shifted' : ''}`}
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >☰</button>
        <h1>OhmEV Dashboard</h1>
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
          <select onChange={(e) => handleSiteChange(e.target.value)} value={selectedSite || ''}>
            <option value="">Select Site</option>
            {[...new Set(inspections.map(inspection => inspection.site))].map(site => (
              <option key={site} value={site}>{site}</option>
            ))}
          </select>
          <select onChange={(e) => handleChargerChange(e.target.value)} value={selectedCharger || ''} disabled={!selectedSite}>
            <option value="">Select Charger</option>
            {[...new Set(inspections.filter(inspection => inspection.site === selectedSite).map(inspection => inspection.charger))].map(charger => (
              <option key={charger} value={charger}>{charger}</option>
            ))}
          </select>
        </div>
        <div className="info-boxes">
          <div className="info-box">
            <h2>Charger Status Summary</h2>
            <div>Total Chargers: {inspections.length}</div>
            <div>Chargers in Use: {inspections.filter(inspection => inspection.status === 'in use').length}</div>
            <div>Chargers Available: {inspections.filter(inspection => inspection.status === 'available').length}</div>
            <div>Chargers Under Maintenance: {inspections.filter(inspection => inspection.status === 'maintenance').length}</div>
          </div>
          <div className="info-box">
            <h2>Recent Activity</h2>
            <ul>
              {filteredInspections.map(inspection => (
                <li key={inspection.id}>
                  {inspection.date}: {inspection.issue} - {inspection.resolved ? 'Resolved' : 'Outstanding'}
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
