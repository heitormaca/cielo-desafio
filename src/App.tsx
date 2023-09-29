import { QueryClientProvider, queryClient } from './core/configs/react-query'

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>Vite</div>
        </QueryClientProvider>
    )
}

export default App
