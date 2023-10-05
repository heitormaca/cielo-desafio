import { useLayoutContext } from '@/layout'
import {
    Box,
    Group,
    Avatar,
    Text,
    UnstyledButton,
    UnstyledButtonProps,
    useMantineTheme,
} from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { forwardRef } from 'react'

interface Props extends UnstyledButtonProps {
    opened?: boolean
    showInfo?: boolean
}

const HeaderUserInfo = forwardRef<HTMLButtonElement, Props>(
    ({ opened, showInfo, ...props }, ref) => {
        const { isMobile } = useLayoutContext()
        const user = 'Admin'
        const initialName = user.slice(0, 1).toUpperCase()
        const { colorScheme } = useMantineTheme()
        const displayInfo = showInfo || (!showInfo && !isMobile)

        return (
            <UnstyledButton sx={{ cursor: 'pointer' }} ref={ref} {...props}>
                <Group spacing="md">
                    <Avatar
                        radius="xl"
                        size={40}
                        variant="filled"
                        color={colorScheme === 'dark' ? 'primary.4' : ''}
                    >
                        {initialName}
                    </Avatar>

                    {displayInfo && (
                        <Group spacing="md">
                            <Box>
                                <Text weight="bold" size="sm">
                                    {user}
                                </Text>
                            </Box>
                            {!isMobile && (
                                <>
                                    {opened ? (
                                        <IconChevronUp />
                                    ) : (
                                        <IconChevronDown />
                                    )}
                                </>
                            )}
                        </Group>
                    )}
                </Group>
            </UnstyledButton>
        )
    }
)

export default HeaderUserInfo
