import { styled } from '../../../../stitches.config'
import { display, bgColor, position, positionOptions, zIndex } from '../../../../styles'

export const styleAliases = {
  bgColor: 'backgroundColor'
}

const maxWidth = {
  none: 'none',
  full: '100%',
  xl: '80rem' // 1280px
}

const minHeight = {
  none: 'none',
  full: '100%',
  screen: '100vh'
}

const customStyleProps = positionOptions

export const styleProps = {
  display,
  bgColor,
  position,
  zIndex,
  maxWidth,
  minHeight,
  ...customStyleProps
} as const

export const variants = {
  variant: {
    flexCenter: {
      display: 'flex',
      justifyContent: 'center'
    },
    marginCenter: {
      margin: '0 auto'
    }
  }
}

export const StyledDiv = styled('div', {
  variants
})
