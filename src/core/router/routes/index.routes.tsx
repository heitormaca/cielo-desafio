import Layout from '@/layout'
import DashboardPage from '@/pages/DashboardPage'
import RevenuePage from '@/pages/RevenuePage'
import { IconChartAreaLine, IconCoin } from '@tabler/icons-react'
import { RouteObjectPermission } from 'rouper-navigation'
import { FeedbackError } from '../components'

export default [
  {
    path: '/',
    element: <Layout />,
    errorElement: <FeedbackError />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
        others: { title: 'Dashboard', icon: <IconChartAreaLine /> },
      },
      {
        path: 'revenue',
        element: <RevenuePage />,
        others: { title: 'Faturamento', icon: <IconCoin /> },
      },
    ],
  },
] as RouteObjectPermission[]
