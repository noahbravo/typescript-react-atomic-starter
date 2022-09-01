import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, styleAliases, variants, StyledDiv } from './styles'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  border?: keyof typeof variants.border
}

const Box = ({ children, border, css, ...props }: BoxProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })
  return (
    <StyledDiv border={border} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { Box }
