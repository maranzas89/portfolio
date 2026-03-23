import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'

import { StorefrontLayout } from '@/layouts/StorefrontLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

import { HomePage } from '@/pages/storefront/HomePage'
import { ProductDetailPage } from '@/pages/storefront/ProductDetailPage'
import { CartPage } from '@/pages/storefront/CartPage'
import { CheckoutPage } from '@/pages/storefront/CheckoutPage'

import { OverviewPage } from '@/pages/dashboard/OverviewPage'
import { IssuesPage } from '@/pages/dashboard/IssuesPage'
import { IssueDetailPage } from '@/pages/dashboard/IssueDetailPage'
import { PerformancePage } from '@/pages/dashboard/PerformancePage'
import { ReplayPage } from '@/pages/dashboard/ReplayPage'
import { AlertsPage } from '@/pages/dashboard/AlertsPage'
import { SettingsPage } from '@/pages/dashboard/SettingsPage'

function ModeSwitcher() {
  const { pathname } = useLocation()
  const isStorefront = pathname.startsWith('/store')
  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-gray-900 flex items-center px-4 gap-1">
      <Link
        to="/store"
        className={[
          'flex items-center h-full px-4 text-sm font-medium transition-colors',
          isStorefront
            ? 'text-white border-b-2 border-blue-500'
            : 'text-white/50 hover:text-white border-b-2 border-transparent',
        ].join(' ')}
      >
        Storefront
      </Link>
      <Link
        to="/dashboard"
        className={[
          'flex items-center h-full px-4 text-sm font-medium transition-colors',
          isDashboard
            ? 'text-white border-b-2 border-blue-500'
            : 'text-white/50 hover:text-white border-b-2 border-transparent',
        ].join(' ')}
      >
        Dashboard
      </Link>
    </div>
  )
}

function AppRoutes() {
  return (
    <>
      <ModeSwitcher />
      <Routes>
        <Route path="/" element={<Navigate to="/store" replace />} />

        <Route path="/store" element={<StorefrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="issues" element={<IssuesPage />} />
          <Route path="issues/:id" element={<IssueDetailPage />} />
          <Route path="performance" element={<PerformancePage />} />
          <Route path="replays" element={<ReplayPage />} />
          <Route path="replays/:id" element={<ReplayPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export function App() {
  return (
    <BrowserRouter basename="/pulse">
      <AppRoutes />
    </BrowserRouter>
  )
}
