import { RouterProvider } from 'react-router-dom'
import MantineConfigProvider from './core/configs/mantine'
import { QueryClientProvider, queryClient } from './core/configs/react-query'
import { router } from './routes'

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineConfigProvider>
                <RouterProvider router={router} />
            </MantineConfigProvider>
        </QueryClientProvider>
    )
}

export default App
