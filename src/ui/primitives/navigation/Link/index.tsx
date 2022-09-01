import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, StyledLink } from './styles'

const externalLinkProps = {
  rel: 'noopener noreferrer nofollow',
  target: '_blank'
}

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    PrimitiveProps<typeof styleProps> {
  children?: React.ReactNode
  isExternal?: boolean
}

const Link = ({ children, css, isExternal = true, ...props }: LinkProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledLink
      css={{ ...mediaStyles, ...css }}
      {...(isExternal && externalLinkProps)}
      {...restProps}
    >
      {children}
    </StyledLink>
  )
}

export { Link }
