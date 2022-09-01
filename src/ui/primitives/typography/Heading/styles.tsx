import { styled } from '../../../../stitches.config'
import { display, fontSize, textTransform } from '../../../../styles'

export const styleProps = {
  display,
  fontSize,
  textTransform
} as const

export const variants = {
  variant: {
    section: {
      fontSize: '$xl',
      fontWeight: 900,
      '@md': {
        fontSize: '$2xl'
      },
      '@lg': {
        fontSize: '$3xl'
      }
    }
  }
}

export const StyledH1 = styled('h1', {
  fontFamily: '$primary',
  fontWeight: 700,
  variants
})
