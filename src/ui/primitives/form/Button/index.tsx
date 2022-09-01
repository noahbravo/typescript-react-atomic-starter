import React from 'react'
import type { LayoutAndCSSProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { variants, StyledButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, LayoutAndCSSProps {
  children: React.ReactNode
  variant: keyof typeof variants.variant
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, css, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props })

    return (
      <StyledButton
        type="button"
        variant={variant}
        css={{ ...mediaStyles, ...css }}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </StyledButton>
    )
  }
)

export { Button }
