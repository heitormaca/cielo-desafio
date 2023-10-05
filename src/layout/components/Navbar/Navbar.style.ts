import { createStyles } from '@mantine/core'

export const useNavbarStyle = createStyles((theme) => {
    return {
        root: {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[9]
                    : theme.white,
            borderRightColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2],
        },

        navbarDivider: {
            borderTopColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2],
        },
    }
})
