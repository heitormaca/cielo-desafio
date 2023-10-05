import { createStyles } from '@mantine/styles'

export const useFeedbackErrorStyle = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.primary[9] : theme.white,
  },
}))
