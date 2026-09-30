import { lazy } from 'react';

export const lazyComponents = {
  LazyPortfolioOverview: lazy(() => import('../pages/PortfolioOverview')),
  LazyPortfolioDetail: lazy(() => import('../pages/PortfolioDetail')),
};
