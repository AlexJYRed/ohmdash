// Inside SiteSummaryStats component or wherever the link is needed
import Link from 'next/link';
import ailments from '../../../ailments.json';

const SiteSummaryStats = ({ site }) => {
  return (
    <div>
      <h2>{site} - Summary</h2>
      {/* Site summary stats here */}
      <Link href={`/sites/${site}`}>
        View Details
      </Link>
    </div>
  );
};

export default SiteSummaryStats;