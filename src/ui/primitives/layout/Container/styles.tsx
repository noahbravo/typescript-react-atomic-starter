import { styled } from '../../../../stitches.config'
import { bgColor } from '../../../../styles'

export const styleAliases = {
  bgColor: 'backgroundColor'
}

export const styleProps = {
  bgColor,
  background: ''
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
