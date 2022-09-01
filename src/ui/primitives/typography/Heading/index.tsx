import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, variants, StyledH1 } from './styles'

interface HeadingProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4'
  variant?: keyof typeof variants.variant
}

const Heading = ({ as = 'h1', css, variant, children, ...props }: HeadingProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledH1 as={as} variant={variant} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledH1>
  )
}

export { Heading }
