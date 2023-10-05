import MantineConfigProvider from './core/configs/mantine'
import { QueryClientProvider, queryClient } from './core/configs/react-query'
import RouterConfigProvider from './core/router'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineConfigProvider>
        <RouterConfigProvider />
      </MantineConfigProvider>
    </QueryClientProvider>
  )
}

export default App
