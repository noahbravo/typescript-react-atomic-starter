import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { useProgressiveImage } from '../../../../utils/hooks'
import { styleAliases, styleProps, StyledImg } from './styles'

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> &
  PrimitiveProps<typeof styleProps> & {
    src: string
    thumbSrc?: string
    alt: string
    loading?: 'lazy' | 'eager'
  }

const Img = ({ src: fullSrc, thumbSrc, alt, loading = 'lazy', css, ...props }: ImgProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })
  const { src, blur } = useProgressiveImage(thumbSrc, fullSrc)

  return (
    <StyledImg
      css={{
        ...mediaStyles,
        filter: blur ? 'blur(8px)' : 'none',
        transition: blur ? 'none' : 'filter 500ms ease-in 0ms',
        ...css
      }}
      src={src}
      alt={alt}
      loading={loading}
      {...restProps}
    />
  )
}
export { Img }
