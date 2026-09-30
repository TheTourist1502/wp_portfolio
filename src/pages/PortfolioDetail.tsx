import { Card } from 'wp_shared/Card';

export default function PortfolioDetail({ id }: { id: string }) {
  return <Card title={`Portfolio ${id}`}>Portfolio detail.</Card>;
}
