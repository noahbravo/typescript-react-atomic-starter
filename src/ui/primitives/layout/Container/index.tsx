import React from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, styleAliases, variants, StyledDiv } from './styles'

interface ContainerProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  variant?: keyof typeof variants.variant
}

type PolymorphicContainer = Polymorphic.ForwardRefComponent<'div', ContainerProps>

const Container = React.forwardRef(
  ({ as = 'div', variant, css, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })

    return (
      <StyledDiv
        as={as}
        variant={variant}
        css={{ ...mediaStyles, ...css }}
        {...restProps}
        ref={forwardedRef}
      >
        {children}
      </StyledDiv>
    )
  }
) as PolymorphicContainer

export { Container }
