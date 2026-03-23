import { NavLink, Outlet } from 'react-router-dom';

// ─── Icons ────────────────────────────────────────────────────────────────────

function PulseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h3l3-8 4 16 3-8h5"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IssuesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ReplaysIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.586-3.8A1 1 0 007 8.232v7.536a1 1 0 001.166.964l6.586-1.506A1 1 0 0016 14.268v-2.536a1 1 0 00-1.248-.564z" />
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-4.999M9 17H4l1.405-1.405A2.032 2.032 0 006 14.158V11a6 6 0 016-6 6 6 0 016 6v3.159c0 .538.214 1.055.595 1.436L20 17H9zm0 0a3 3 0 006 0H9z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// ─── Nav items config ─────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon />, end: true },
  { label: 'Issues', to: '/dashboard/issues', icon: <IssuesIcon />, end: false },
  { label: 'Performance', to: '/dashboard/performance', icon: <PerformanceIcon />, end: false },
  { label: 'Replays', to: '/dashboard/replays', icon: <ReplaysIcon />, end: false },
  { label: 'Alerts', to: '/dashboard/alerts', icon: <AlertsIcon />, end: false },
  { label: 'Settings', to: '/dashboard/settings', icon: <SettingsIcon />, end: false },
] as const;

// ─── Layout ───────────────────────────────────────────────────────────────────

export function DashboardLayout() {
  return (
    <div className="pt-10 min-h-screen flex relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[#0a0a1a]" />
      {/* Sidebar */}
      <aside className="w-56 fixed top-10 left-0 bottom-0 bg-[var(--glass-bg-light)] backdrop-blur-xl border-r border-[var(--glass-border)] flex flex-col z-30">
        {/* Logo area */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-[var(--glass-border)]">
          <span className="text-[var(--lg-brand-primary)]">
            <PulseIcon />
          </span>
          <span className="text-xl font-bold font-display text-[var(--lg-brand-primary)] tracking-tight">Pulse</span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ label, to, icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-dash-surface-hover text-[var(--lg-brand-primary)]'
                    : 'text-dash-text-secondary hover:bg-dash-surface-hover hover:text-dash-text',
                ].join(' ')
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-56 flex-1 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
}
