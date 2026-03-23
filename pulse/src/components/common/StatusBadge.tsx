import { Badge } from './Badge';

export type StatusBadgeProps = {
  status: 'unresolved' | 'resolved' | 'ignored';
};

const statusConfig: Record<
  StatusBadgeProps['status'],
  { label: string; variant: 'danger' | 'success' | 'neutral' }
> = {
  unresolved: { label: 'Unresolved', variant: 'danger' },
  resolved: { label: 'Resolved', variant: 'success' },
  ignored: { label: 'Ignored', variant: 'neutral' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, variant } = statusConfig[status];
  return <Badge variant={variant}>{label}</Badge>;
}
