import { Link } from '@tanstack/react-router';
import { Card } from 'wp_shared/Card';

import { APP_ROUTES, PORTFOLIO_TABS, type PortfolioTab } from '../constants/routes';

export default function PortfolioOverview({ tab }: { tab: PortfolioTab }) {
  return (
    <Card title="Portfolio">
      <nav>
        {PORTFOLIO_TABS.map((t) => (
          <Link key={t} to={APP_ROUTES.PORTFOLIO.navigate} search={{ tab: t }}>
            {t}
          </Link>
        ))}
      </nav>
      <p>Active tab: {tab}</p>
      <Link to={APP_ROUTES.PORTFOLIO_DETAIL.navigate} params={{ id: 'demo' }}>
        Open demo portfolio
      </Link>
    </Card>
  );
}
