import { styled } from '../../../../stitches.config'
import {
  display,
  maxWidth,
  minHeight,
  position,
  positionOptions,
  zIndex,
  bgColor
} from '../../../../styles'

export const styleAliases = {
  bgColor: 'backgroundColor'
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
  center: {
    self: {
      margin: '0 auto'
    },
    content: {
      display: 'flex',
      alignItems: 'center'
    }
  }
}

export const StyledDiv = styled('div', {
  variants
})
