import { styled } from '../../../../stitches.config'
import { toRem } from '../../../../styles'

export const variants = {
  variant: {
    full: {
      width: toRem(262),
      height: toRem(43),
      border: 0,
      borderRadius: toRem(9),
      backgroundColor: '$white',
      color: '$black',
      '&:hover': {
        backgroundColor: 'lightgray'
      }
    },
    ghost: {
      width: toRem(126),
      height: toRem(28),
      border: '1px solid $white',
      borderRadius: toRem(25),
      color: '$white',
      backgroundColor: 'transparent',
      '&:hover, &.active': {
        backgroundColor: '$white',
        color: '$black'
      }
    }
  }
}

export const StyledButton = styled('button', {
  fontSize: '$sm',
  cursor: 'pointer',
  transition: '0.15s all ease-in-out',
  variants
})
