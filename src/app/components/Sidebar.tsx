import Link from 'next/link';

const Sidebar = ({ isOpen }) => {
  return (
    <div style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '250px', 
      height: '100%', 
      backgroundColor: '#444', 
      color: 'white', 
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
      transition: 'transform 0.3s ease-in-out'
    }}>
      <nav>
        <ul>
          {/* Apply styles directly to Link components */}
          <li style={{ padding: '15px 20px', cursor: 'pointer' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Overview</Link>
          </li>
          <li style={{ padding: '15px 20px', cursor: 'pointer' }}>
            <Link href="/details" style={{ color: 'white', textDecoration: 'none' }}>Details</Link>
          </li>
          <li style={{ padding: '15px 20px', cursor: 'pointer' }}>
            <Link href="/maintenance" style={{ color: 'white', textDecoration: 'none' }}>Maintenance</Link>
          </li>
          <li style={{ padding: '15px 20px', cursor: 'pointer' }}>
            <Link href="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
