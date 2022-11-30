import React from 'react'
import type { PrimitiveProps } from '../../types'
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../../../../utils/polymorphic'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, StyledSpan } from './styles'

type PolymorphicText = PolymorphicForwardRefComponent<'span', PrimitiveProps<typeof styleProps>>

const Text = React.forwardRef(({ as = 'span', css, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledSpan as={as} css={{ ...mediaStyles, ...css }} ref={forwardedRef} {...restProps}>
      {children}
    </StyledSpan>
  )
}) as PolymorphicText

export { Text }
