import { createStyles } from '@mantine/core'

export const useLayoutStyle = createStyles((theme) => ({
    main: {
        backgroundColor: theme.other.layout[theme.colorScheme].backgroundColor,
    },

    root: {
        overflowX: 'hidden',
    },
}))
