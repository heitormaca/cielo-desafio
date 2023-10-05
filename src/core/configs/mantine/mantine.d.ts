interface ThemeComponent {
  defaultProps?:
    | Record<string, unknown>
    | ((theme: MantineTheme) => Record<string, unknown>)
  classNames?: Record<string, string>
  styles?:
    | Record<string, CSSObject>
    | ((theme: MantineTheme, params: unknown) => Record<string, CSSObject>)
}
