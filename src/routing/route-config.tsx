import { type AnyRoute, createRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { APP_ROUTES, PORTFOLIO_TABS, type PortfolioTab } from '../constants/routes';
import { lazyComponents } from './lazy-components';

const isTab = (value: unknown): value is PortfolioTab =>
  PORTFOLIO_TABS.includes(value as PortfolioTab);

// Exposed as `wp_portfolio/routes`. The host passes its layout route as `parent`;
// standalone dev (routing/index.tsx) passes a bare root route.
// Params/search are read here and passed as props: route ids differ between host and standalone,
// so pages must not call getRouteApi themselves. The casts only resolve the generic `TParent`;
// validateSearch and the `$param` path guarantee the shapes at runtime.
export function createRoutes<TParent extends AnyRoute>(parent: TParent) {
  const portfolioRoute = createRoute({
    getParentRoute: () => parent,
    path: APP_ROUTES.PORTFOLIO.path,
    validateSearch: (search: Record<string, unknown>): { tab: PortfolioTab } => ({
      tab: isTab(search.tab) ? search.tab : 'overview',
    }),
    component: function PortfolioRoute(): ReactNode {
      const { tab } = portfolioRoute.useSearch() as { tab: PortfolioTab };
      return <lazyComponents.LazyPortfolioOverview tab={tab} />;
    },
  });

  const portfolioDetailRoute = createRoute({
    getParentRoute: () => parent,
    path: APP_ROUTES.PORTFOLIO_DETAIL.path,
    component: function PortfolioDetailRoute(): ReactNode {
      const { id } = portfolioDetailRoute.useParams() as { id: string };
      return <lazyComponents.LazyPortfolioDetail id={id} />;
    },
  });

  return [portfolioRoute, portfolioDetailRoute] as const;
}
