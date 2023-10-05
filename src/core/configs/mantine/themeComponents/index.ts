import { MantineThemeOverride } from '@mantine/styles'
import MenuComponent from './MenuComponent'
import ModalComponent from './ModalComponent'
import ButtonComponent from './ButtonComponent'

export default {
  Menu: MenuComponent,
  Modal: ModalComponent,
  Button: ButtonComponent,
} as MantineThemeOverride['components']
