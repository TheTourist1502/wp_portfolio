import { lazy } from 'react';

export const lazyComponents = {
  LazyPortfolioOverview: lazy(() => import('../pages/portfolio-overview')),
  LazyPortfolioDetail: lazy(() => import('../pages/portfolio-detail')),
};
