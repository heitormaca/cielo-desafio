import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { PropsWithChildren } from 'react'
import theme from './theme'
import { DatesProvider } from '@mantine/dates'
import 'dayjs/locale/pt-br'

const MantineConfigProvider: React.FC<PropsWithChildren> = (props) => {
  const colorSchemeSystem = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: colorSchemeSystem,
    getInitialValueInEffect: false,
  })

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  function toggleColorScheme(value?: ColorScheme) {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <ModalsProvider>
          <DatesProvider
            settings={{ locale: 'pt-br', firstDayOfWeek: 0, weekendDays: [0] }}
          >
            {props.children}
          </DatesProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
export default MantineConfigProvider
