import React from 'react'
import type { LayoutAndCSSProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { StyledLink } from './styles'

const externalLinkProps = {
  rel: 'noopener noreferrer nofollow',
  target: '_blank'
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LayoutAndCSSProps {
  children?: React.ReactNode
  isExternal?: boolean
}

const Link = ({ children, css, isExternal = false, ...props }: LinkProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props })

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
