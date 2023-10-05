import { MantineThemeOverride } from '@mantine/core'
import components from './themeComponents'

export default {
  components,
  fontFamily: 'Montserrat, sans-serif',
  colors: {
    primary: [
      '#e0f4fd',
      '#b0e2f9',
      '#7bd0f5',
      '#43bdf1',
      '#00aeef',
      '#00a1ec',
      '#0094de',
      '#0081ca',
      '#0070b6',
      '#005195',
    ],
    dark: [
      '#e4f2f9',
      '#beddf2',
      '#97c9ea',
      '#73b3e1',
      '#59a3dc',
      '#4595d6',
      '#3d87ca',
      '#3476b7',
      '#2c65a6',
      '#204986',
    ],
  },

  black: '#5a646e',

  colorScheme: 'light',
  primaryShade: { light: 4, dark: 9 },
  other: {
    headerHeight: 60,
    layout: {
      light: {
        backgroundColor: '#FFFFFF',
      },
      dark: {
        backgroundColor: '#204986',
      },
    },
  },
} as MantineThemeOverride
