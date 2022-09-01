import { styled } from '../../../../stitches.config'
import { position, positionOptions, zIndex } from '../../../../styles'

export const styleAliases = {
  align: 'objectPosition',
  fit: 'objectFit'
}

const fit = {
  contain: 'contain',
  cover: 'cover',
  fill: 'fill',
  none: 'none',
  scaleSown: 'scale-down'
}

const align = {
  bottom: 'bottom',
  center: 'center',
  left: 'left',
  leftBottom: 'left bottom',
  leftTop: 'left top',
  right: 'right',
  rightBottom: 'right bottom',
  rightTop: 'right top',
  top: 'top'
}

const customStyleProps = {
  maxWidth: '',
  maxHeight: '',
  ...positionOptions
}

export const styleProps = {
  align,
  fit,
  position,
  zIndex,
  ...customStyleProps
} as const

export const StyledImg = styled('img')
