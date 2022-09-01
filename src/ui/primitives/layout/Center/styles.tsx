import { styled } from '../../../../stitches.config'
import {
  styleProps as boxStyleProps,
  styleAliases as boxStyleAliases,
  variants as boxVariants
} from '../Box/styles'

export const styleAliases = boxStyleAliases

export const styleProps = boxStyleProps

export const variants = {
  ...boxVariants,
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
