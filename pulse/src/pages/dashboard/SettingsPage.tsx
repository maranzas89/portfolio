import { useState } from 'react';
import { GlassCard, GlassButton, GlassInput } from 'wens-liquid-glass-design-system';

const TEAM_MEMBERS = [
  { name: 'Sarah Chen', role: 'Admin', email: 'sarah@techstyle.com' },
  { name: 'James Park', role: 'Developer', email: 'james@techstyle.com' },
  { name: 'Maya Singh', role: 'Developer', email: 'maya@techstyle.com' },
];

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackWebhook, setSlackWebhook] = useState('');
  const [alertThreshold, setAlertThreshold] = useState('5');

  return (
    <div className="min-h-screen bg-dash-bg text-dash-text p-6">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dash-text">Settings</h1>
        <p className="text-sm text-dash-text-secondary mt-0.5">
          Manage your project configuration and preferences.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Project Settings */}
        <GlassCard>
          <div className="px-5 py-4 border-b border-[var(--lg-glass-border)]">
            <h2 className="text-sm font-semibold text-dash-text">Project Settings</h2>
            <p className="text-xs text-dash-text-secondary mt-0.5">Basic project information.</p>
          </div>
          <div className="px-5 py-4 space-y-4">
            <div>
              <label className="block text-xs font-medium text-dash-text-secondary mb-1.5 uppercase tracking-wide">
                Project Name
              </label>
              <GlassInput value="techstyle-storefront" readOnly />
            </div>
            <div>
              <label className="block text-xs font-medium text-dash-text-secondary mb-1.5 uppercase tracking-wide">
                Platform
              </label>
              <div className="flex items-center gap-2 bg-dash-surface border border-[var(--lg-glass-border)] rounded-lg px-3 py-2.5 text-sm text-dash-text-secondary">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 14.18l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.631 2.406z"/>
                </svg>
                React / JavaScript
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-dash-text-secondary mb-1.5 uppercase tracking-wide">
                Environment
              </label>
              <div className="flex items-center gap-2 bg-dash-surface border border-[var(--lg-glass-border)] rounded-lg px-3 py-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-sm text-dash-text">Production</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Alert Configuration */}
        <GlassCard>
          <div className="px-5 py-4 border-b border-[var(--lg-glass-border)]">
            <h2 className="text-sm font-semibold text-dash-text">Alert Configuration</h2>
            <p className="text-xs text-dash-text-secondary mt-0.5">
              Configure how and when you receive notifications.
            </p>
          </div>
          <div className="px-5 py-4 space-y-4">
            {/* Email notifications toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dash-text">Email Notifications</p>
                <p className="text-xs text-dash-text-secondary mt-0.5">
                  Receive alerts by email when issues are detected.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <div className="w-10 h-6 bg-dash-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500" />
              </label>
            </div>

            {/* Slack webhook */}
            <div>
              <label className="block text-xs font-medium text-dash-text-secondary mb-1.5 uppercase tracking-wide">
                Slack Webhook URL
              </label>
              <GlassInput
                placeholder="https://hooks.slack.com/services/..."
                value={slackWebhook}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSlackWebhook(e.target.value)}
              />
            </div>

            {/* Alert threshold */}
            <div>
              <label className="block text-xs font-medium text-dash-text-secondary mb-1.5 uppercase tracking-wide">
                Alert Threshold (errors / minute)
              </label>
              <GlassInput
                type="number"
                value={alertThreshold}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlertThreshold(e.target.value)}
              />
              <p className="text-xs text-dash-text-secondary mt-1.5">
                Trigger an alert when this many errors occur within a minute.
              </p>
            </div>

            <div className="pt-1">
              <GlassButton variant="primary" size="sm">
                Save Alert Settings
              </GlassButton>
            </div>
          </div>
        </GlassCard>

        {/* Team Members */}
        <GlassCard>
          <div className="px-5 py-4 border-b border-[var(--lg-glass-border)]">
            <h2 className="text-sm font-semibold text-dash-text">Team Members</h2>
            <p className="text-xs text-dash-text-secondary mt-0.5">
              People with access to this project.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--lg-glass-border)]">
                  <th className="text-left px-5 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">
                    Role
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {TEAM_MEMBERS.map((member, idx) => (
                  <tr
                    key={member.email}
                    className={`border-b border-[var(--lg-glass-border)] last:border-0 ${
                      idx % 2 === 0 ? '' : 'bg-dash-bg/40'
                    }`}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-dash-surface border border-[var(--lg-glass-border)] flex items-center justify-center text-xs font-semibold text-dash-text flex-shrink-0">
                          {member.name.charAt(0)}
                        </div>
                        <span className="font-medium text-dash-text">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${
                          member.role === 'Admin'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            : 'bg-dash-surface text-dash-text-secondary border-dash-border'
                        }`}
                      >
                        {member.role}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-dash-text-secondary font-mono text-xs">
                      {member.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Danger Zone */}
        <GlassCard>
          <div className="px-5 py-4 border-b border-red-500/20">
            <h2 className="text-sm font-semibold text-red-400">Danger Zone</h2>
            <p className="text-xs text-dash-text-secondary mt-0.5">
              These actions are irreversible. Proceed with caution.
            </p>
          </div>
          <div className="px-5 py-4 space-y-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-dash-text">Reset Error Data</p>
                <p className="text-xs text-dash-text-secondary mt-0.5">
                  Permanently delete all captured error events.
                </p>
              </div>
              <GlassButton variant="danger" size="sm">
                Reset Error Data
              </GlassButton>
            </div>
            <div className="border-t border-[var(--lg-glass-border)]" />
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-dash-text">Delete Project</p>
                <p className="text-xs text-dash-text-secondary mt-0.5">
                  Permanently delete this project and all associated data.
                </p>
              </div>
              <GlassButton variant="danger" size="sm">
                Delete Project
              </GlassButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
