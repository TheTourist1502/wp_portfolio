// `path` is the segment passed to createRoute; `navigate` is the full URL for <Link to>.
export const APP_ROUTES = {
  PORTFOLIO: { path: 'portfolio', navigate: '/portfolio' },
  PORTFOLIO_DETAIL: { path: 'portfolio/$id', navigate: '/portfolio/$id' },
} as const;

export const PORTFOLIO_TABS = ['overview', 'holdings', 'performance'] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];
