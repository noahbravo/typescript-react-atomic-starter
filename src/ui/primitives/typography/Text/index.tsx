import React from 'react'
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../../../../utils/polymorphic'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, StyledSpan } from './styles'

interface TextProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
}

type PolymorphicText = PolymorphicForwardRefComponent<'span', TextProps>

const Text = React.forwardRef(({ as = 'span', css, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledSpan as={as} css={{ ...mediaStyles, ...css }} ref={forwardedRef} {...restProps}>
      {children}
    </StyledSpan>
  )
}) as PolymorphicText

Text.displayName = 'Text'

export { Text }
