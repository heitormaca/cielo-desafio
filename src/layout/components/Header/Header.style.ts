import { createStyles } from '@mantine/core'

export const useHeaderStyle = createStyles((theme) => ({
    header: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
        borderBottomColor:
            theme.colorScheme === 'dark'
                ? theme.colors.primary[4]
                : theme.colors.gray[2],
    },

    headerBrand: {
        borderRight: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.primary[4]
                : theme.colors.gray[2]
        }`,
    },

    headerMenuAction: {
        display: 'none',

        [theme.fn.smallerThan('sm')]: {
            display: 'block',
        },
    },
}))
