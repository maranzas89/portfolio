export type AlertRule = {
  id: string;
  name: string;
  condition: string;
  threshold: string;
  windowMinutes: number;
  channel: string;
  status: 'firing' | 'ok' | 'resolved';
  triggeredAt: string | null;
  resolvedAt: string | null;
  environment: string;
};

export const alertRules: AlertRule[] = [
  {
    id: 'ALERT-001',
    name: 'High error rate on /checkout',
    condition: 'error_rate > 5%',
    threshold: '5% errors over 10 minutes',
    windowMinutes: 10,
    channel: 'Slack #engineering',
    status: 'firing',
    triggeredAt: '2 hours ago',
    resolvedAt: null,
    environment: 'production',
  },
  {
    id: 'ALERT-002',
    name: 'Elevated P75 latency on /checkout',
    condition: 'p75_latency > 400ms',
    threshold: 'P75 latency > 400ms over 15 minutes',
    windowMinutes: 15,
    channel: 'Slack #engineering',
    status: 'resolved',
    triggeredAt: '1 day ago',
    resolvedAt: '22 hours ago',
    environment: 'production',
  },
  {
    id: 'ALERT-003',
    name: 'New unhandled exception',
    condition: 'new_issue_created',
    threshold: 'Any new issue with priority >= high',
    windowMinutes: 0,
    channel: 'Slack #alerts',
    status: 'ok',
    triggeredAt: null,
    resolvedAt: null,
    environment: 'production',
  },
];
