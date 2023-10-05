import { MenuProps } from '@mantine/core'

const defaultProps: Partial<MenuProps> = {
  styles: (theme) => ({
    dropdown: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.primary : undefined,
      borderColor:
        theme.colorScheme === 'dark' ? theme.colors.primary[4] : undefined,
    },
  }),
}

export default {
  defaultProps,
} as ThemeComponent
