import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/Dashboard'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage />,
        errorElement: <ErrorPage />,
    },
])
