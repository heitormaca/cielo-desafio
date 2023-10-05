import { MantineThemeOverride } from '@mantine/styles'
import MenuComponent from './MenuComponent'
import ModalComponent from './ModalComponent'

export default {
  Menu: MenuComponent,
  Modal: ModalComponent,
} as MantineThemeOverride['components']
