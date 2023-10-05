import { AppShell, useMantineTheme, Stack } from '@mantine/core'
import { useHotkeys, useLocalStorage, useViewportSize } from '@mantine/hooks'
import { createContext, useContext, useEffect } from 'react'
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom'
import { LayoutHeader, LayoutNavbar } from './components'
import { useLayoutStyle } from './Layout.style'
import { useRouperRoutes } from 'rouper-navigation'
import { NavbarItem } from './components/Navbar/components'

interface LayoutContextInfo {
    collapsed: boolean
    isMobile: boolean
}
interface LayoutContextParams extends LayoutContextInfo {
    setLayoutParams: (data: Partial<LayoutContextInfo>) => void
}

const LayoutContext = createContext({} as LayoutContextParams)

const Layout: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { classes } = useLayoutStyle()
    const [params, setParams] = useLocalStorage({
        key: 'layout-params',
        defaultValue: {
            collapsed: false,
            isMobile: false,
        },
        getInitialValueInEffect: false,
    })
    const theme = useMantineTheme()
    const { width } = useViewportSize()
    const currentRoute = useMatches().at(-1)

    const rootRoutes = useRouperRoutes()[0]

    const appRoutes = rootRoutes.children || []

    useHotkeys([
        ['ctrl+T', () => setLayoutParams({ collapsed: !params.collapsed })],
    ])

    function setLayoutParams(data: Partial<LayoutContextInfo>) {
        setParams((state) => ({ ...state, ...data }))
    }

    function routeActive(path?: string) {
        if (!path) return false
        return !!currentRoute?.pathname.split('/').includes(path)
    }

    useEffect(() => {
        setLayoutParams({
            isMobile:
                width <= Number(theme.breakpoints.sm.replace('em', '')) * 16,
            collapsed:
                width <= Number(theme.breakpoints.md.replace('em', '')) * 16,
        })
    }, [width])

    useEffect(() => {
        const routeFinded = appRoutes.find(
            (route) => route.path && currentRoute?.pathname.includes(route.path)
        )

        if (routeFinded) {
            document.title = `${routeFinded.others?.title}`
        }
    }, [currentRoute])

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/dashboard')
        }
    }, [location.pathname, navigate])

    return (
        <LayoutContext.Provider value={{ ...params, setLayoutParams }}>
            <AppShell
                header={<LayoutHeader />}
                navbar={
                    <LayoutNavbar
                        menuSectionComponent={
                            <Stack spacing={0}>
                                {appRoutes.map((route) => (
                                    <NavbarItem
                                        key={route.path}
                                        to={route.path || ''}
                                        label={route.others?.title}
                                        icon={route.others?.icon}
                                        active={routeActive(route.path)}
                                        disabled={route.others?.disabled}
                                        collapsed={params.collapsed}
                                    />
                                ))}
                            </Stack>
                        }
                    />
                }
                classNames={classes}
            >
                <Outlet />
            </AppShell>
        </LayoutContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLayoutContext = () => useContext(LayoutContext)

export default Layout
