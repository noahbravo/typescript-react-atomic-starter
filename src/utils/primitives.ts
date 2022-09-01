import { config } from '../stitches.config'
import { toRem, layout } from '../styles'

const { media } = config
const initialBreakpoint = 'xs'
const mediaKeys = [initialBreakpoint, ...Object.keys(media)]

type StringObject = Record<string, string>
type StringNumberObject = Record<string, string | number>
type PropsType = Record<string, any>
type StyleProps = Record<string, StringObject | string>
type StyleAliases = StringObject

interface GetFormattedPropsOptions {
  props: PropsType
  styleProps?: StyleProps
  styleAliases?: StyleAliases
  customStyleProps?: StringObject
}

const remStyleProps = ['margin', 'padding', 'width', 'height', 'gap']

export function splitProps(props: PropsType, stylePropsKeys: string[]) {
  const styleProps = {} as StringObject
  const restProps = {} as PropsType

  Object.entries(props).forEach(([key, value]) => {
    if (stylePropsKeys.includes(key)) styleProps[key] = value
    else restProps[key] = value
  })

  return [styleProps, restProps]
}

export function getMediaStyles(
  stylesWithBreakpointsProps: StringObject,
  stylesWithBreakpoints?: StyleProps,
  styleAliases?: StyleAliases
) {
  function formatStyles(value: number | string, styleKey: string) {
    const key = styleAliases ? styleAliases[styleKey] || styleKey : styleKey
    const styleProp = stylesWithBreakpoints && stylesWithBreakpoints[styleKey]
    const stylePropsValue = styleProp && typeof styleProp === 'object' ? styleProp[value] : value
    const formatToRem = remStyleProps.some((remStyleProp) => styleKey.includes(remStyleProp))
    const formattedValue =
      typeof stylePropsValue === 'number' && formatToRem ? toRem(stylePropsValue) : stylePropsValue

    return { key, formattedValue }
  }

  return mediaKeys.reduce<Record<string, StringNumberObject | string | number>>(
    (acc, mediaKey, index) => {
      if (mediaKey === initialBreakpoint) {
        Object.entries(stylesWithBreakpointsProps).forEach(([styleKey, styleValue]) => {
          const value = Array.isArray(styleValue) ? styleValue[0] : styleValue
          if (value != null) {
            const { key, formattedValue } = formatStyles(value, styleKey)
            acc[key] = formattedValue
          }
        })
      } else {
        const accMedia = `@${mediaKey}`
        acc[accMedia] = Object.entries(stylesWithBreakpointsProps).reduce<StringNumberObject>(
          (styleAcc, [styleKey, styleValue]) => {
            if (Array.isArray(styleValue)) {
              const value = styleValue[index]
              if (value != null) {
                const { key, formattedValue } = formatStyles(value, styleKey)
                styleAcc[key] = formattedValue
              }
            }
            return styleAcc
          },
          {}
        )
      }
      return acc
    },
    {}
  )
}

export function getformattedProps({ props, styleProps, styleAliases }: GetFormattedPropsOptions) {
  const stylePropsKeys = [...(styleProps ? Object.keys(styleProps) : []), ...Object.keys(layout)]
  const [componentStyleProps, restProps] = splitProps(props, stylePropsKeys)
  const mediaStyles = getMediaStyles(componentStyleProps, styleProps, styleAliases)

  return { mediaStyles, restProps }
}
