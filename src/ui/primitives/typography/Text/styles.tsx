import { styled } from '../../../../stitches.config'
import { display, fontSize, textTransform } from '../../../../styles'

const fontWeight = {
  normal: '400',
  bold: '700'
}

export const styleProps = {
  display,
  fontSize,
  fontWeight,
  textTransform
} as const

export const StyledSpan = styled('span', {
  fontFamily: '$primary'
})
