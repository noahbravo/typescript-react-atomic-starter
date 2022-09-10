import { styled } from '../../../../stitches.config'
import {
  styleProps as boxStyleProps,
  styleAliases as boxStyleAliases,
  variants as boxVariants
} from '../Box/styles'

import { variants as ContainerVariants } from '../Container/styles'

export const styleAliases = boxStyleAliases

export const styleProps = boxStyleProps

export const variants = {
  ...boxVariants,
  ...ContainerVariants
}

export const StyledDiv = styled('div', {
  variants
})
