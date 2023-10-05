import { ModalProps } from '@mantine/core'

const defaultProps: Partial<ModalProps> = {
  styles: (theme) => ({
    header: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.primary : undefined,
    },
    body: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.primary : undefined,
    },
    title: {
      fontWeight: 600,
    },
  }),
}

export default {
  defaultProps,
} as ThemeComponent
