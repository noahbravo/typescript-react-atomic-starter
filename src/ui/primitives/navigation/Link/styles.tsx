import { styled } from '../../../../stitches.config'
import { display } from '../../../../styles'

export const styleProps = {
  display
} as const

export const StyledLink = styled('a', {
  color: '$white',
  textDecoration: 'none',
  transition: '0.15s color ease-in-out',
  '&:hover': {
    color: 'lightgray'
  }
})
