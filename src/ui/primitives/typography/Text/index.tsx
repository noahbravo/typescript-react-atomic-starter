import React from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, StyledSpan } from './styles'

type PolymorphicText = Polymorphic.ForwardRefComponent<'span', PrimitiveProps<typeof styleProps>>

const Text = React.forwardRef(({ as = 'span', css, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledSpan as={as} css={{ ...mediaStyles, ...css }} ref={forwardedRef} {...restProps}>
      {children}
    </StyledSpan>
  )
}) as PolymorphicText

export { Text }
