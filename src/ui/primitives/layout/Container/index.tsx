import React from 'react'
import type { PrimitiveProps } from '../../types'
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../../../../utils/polymorphic'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, styleAliases, variants, StyledDiv } from './styles'

interface ContainerProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  center?: keyof typeof variants.center
}

type PolymorphicContainer = Polymorphic.ForwardRefComponent<'div', ContainerProps>

const Container = PolymorphicForwardRefComponent(
  ({ as = 'div', center, css, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })

    return (
      <StyledDiv
        as={as}
        center={center}
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
