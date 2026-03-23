import { Badge } from './Badge';

export type PriorityBadgeProps = {
  priority: 'critical' | 'high' | 'medium' | 'low';
};

const priorityConfig: Record<
  PriorityBadgeProps['priority'],
  { label: string; variant: 'danger' | 'warning' | 'neutral' }
> = {
  critical: { label: 'Critical', variant: 'danger' },
  high: { label: 'High', variant: 'danger' },
  medium: { label: 'Medium', variant: 'warning' },
  low: { label: 'Low', variant: 'neutral' },
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { label, variant } = priorityConfig[priority];
  return <Badge variant={variant}>{label}</Badge>;
}
