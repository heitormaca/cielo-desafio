import { Group, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
    IconColorSwatch,
    IconExclamationCircle,
    IconUserCircle,
} from '@tabler/icons-react'
import { useState } from 'react'
import { HeaderSettingThemeModal, HeaderUserInfo } from '..'
import { useLayoutContext } from '@/layout'

const HeaderDropdown: React.FC = () => {
    const { isMobile } = useLayoutContext()
    const [opened, setOpened] = useState(false)
    const [settingThemeModalOpened, settingThemeModalAction] =
        useDisclosure(false)

    return (
        <>
            <Menu
                opened={opened}
                onChange={setOpened}
                shadow="md"
                position="bottom-end"
                withinPortal
            >
                <Menu.Target>
                    <HeaderUserInfo opened={opened} />
                </Menu.Target>

                <Menu.Dropdown>
                    {isMobile && (
                        <>
                            <Menu.Label>
                                <HeaderUserInfo showInfo />
                            </Menu.Label>

                            <Menu.Divider />
                        </>
                    )}
                    <Menu.Item icon={<IconUserCircle />} disabled>
                        <Group>
                            <span>Dados da conta</span>
                            <IconExclamationCircle
                                style={{ width: 14, height: 14 }}
                            />
                        </Group>
                    </Menu.Item>

                    <Menu.Item
                        icon={<IconColorSwatch />}
                        onClick={settingThemeModalAction.open}
                    >
                        Configurar tema
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

            <HeaderSettingThemeModal
                opened={settingThemeModalOpened}
                onClose={settingThemeModalAction.close}
            />
        </>
    )
}

export default HeaderDropdown
