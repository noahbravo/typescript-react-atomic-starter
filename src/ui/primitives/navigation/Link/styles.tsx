import { styled } from '../../../../stitches.config'

export const StyledLink = styled('a', {
  color: '$white',
  textDecoration: 'none',
  transition: '0.15s color ease-in-out',
  '&:hover': {
    color: 'lightgray'
  }
})
