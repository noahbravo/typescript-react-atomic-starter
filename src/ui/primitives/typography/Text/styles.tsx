import { styled, config } from '../../../../stitches.config'
import { display, getStylePropsFromToken } from '../../../../styles'

const {
  theme: { colors, fontSizes }
} = config

type Colors = typeof colors
type FontSizes = typeof fontSizes

export const styleAliases = {
  fontColor: 'color',
  align: 'textAlign'
}

const fontColor = getStylePropsFromToken<Colors>(colors)
export const fontSize = getStylePropsFromToken<FontSizes>(fontSizes)

const fontWeight = {
  normal: '400',
  bold: '700'
}

const align = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
  start: 'start',
  end: 'end'
}

const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normalCase: 'none'
}

export const styleProps = {
  display,
  fontSize,
  fontColor,
  fontWeight,
  align,
  textTransform
} as const

export const StyledSpan = styled('span', {
  fontFamily: '$primary'
})
