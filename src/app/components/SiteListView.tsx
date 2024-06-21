// SiteListView.js
const SiteListView = ({ sites, onSelectSite }) => {
    return (
      <div className="site-list">
        {sites.map(site => (
      <div key={site.siteID} onClick={() => onSelectSite(site.siteID)} style={{ border: '1px solid black', padding: '10px' }}>
        <span style={{ float: 'left', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '50%' }}>{site.siteID}</span>
        <span style={{ float: 'right' }}>{site.issues}</span>
        <div style={{ clear: 'both' }}></div>
      </div>
    ))}
        <style jsx>{`
          .site-list {
            width: 250px; // Fixed width for the first column
            overflow-y: auto; // In case of many sites
            border-right: 1px solid black; // Adding a border to separate columns
          }
          .site-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid black; // Black border for each item
          }
          .site-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 70%; // Allows text to fade out if too long
          }
          .issue-count {
            flex-shrink: 0; // Prevents the issue count from being pushed out of view
          }
        `}</style>
      </div>
    );
  };
  
  export default SiteListView;
  