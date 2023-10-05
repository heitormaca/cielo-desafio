import { ButtonProps } from '@mantine/core'

const defaultProps: Partial<ButtonProps> = {
  styles: (theme) => ({
    root: {
      backgroundColor: theme.colors.primary[6],
      ':hover': {
        backgroundColor: theme.colors.primary[4],
      },
    },
  }),
}

export default {
  defaultProps,
} as ThemeComponent
