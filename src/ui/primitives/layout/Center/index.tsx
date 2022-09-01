import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleAliases, styleProps, variants, StyledDiv } from './styles'

type Variants = { [k in keyof typeof variants]?: keyof typeof variants[k] }

interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps>,
    Variants {
  children: React.ReactNode
}

const Center = ({ children, css, border, center = 'content', ...props }: CenterProps) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps,
    styleAliases
  })

  return (
    <StyledDiv border={border} center={center} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { Center }
