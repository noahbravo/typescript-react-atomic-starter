import { styled } from '../../../../stitches.config'
import { display, bgColor, position, positionOptions, zIndex } from '../../../../styles'

export const styleAliases = {
  bgColor: 'backgroundColor',
  bgImage: 'backgroundImage',
  bgSize: 'backgroundSize',
  bgPosition: 'backgroundPosition',
  bgRepeat: 'backgroundRepeat'
}

const bgSize = {
  bgAuto: 'auto',
  bgCover: 'cover',
  bgContain: 'contain'
}

const bgPosition = {
  bgBottom: 'bottom',
  bgCenter: 'center',
  bgLeft: 'left',
  bgLeftBottom: 'left bottom',
  bgLeftTop: 'left top',
  bgRight: 'right',
  bgRightBottom: 'right bottom',
  bgRightTop: 'right top',
  bgTop: 'top'
}

const bgRepeat = {
  bgRepeat: 'repeat',
  bgNoRepeat: 'no-repeat',
  bgRepeatX: 'repeat-x',
  bgRepeatY: 'repeat-y',
  bgRepeatRound: 'round',
  bgRepeatSpace: 'space'
}

const customStyleProps = {
  bgImage: '',
  borderRadius: '',
  ...positionOptions
}

export const styleProps = {
  display,
  bgColor,
  position,
  zIndex,
  bgSize,
  bgPosition,
  bgRepeat,
  ...customStyleProps
} as const

const border = '1px solid $white'
export const variants = {
  border: {
    full: {
      border
    },
    bottom: {
      borderBottom: border
    },
    x: {
      borderX: border
    },
    y: {
      borderY: border
    }
  }
}

export const StyledDiv = styled('div', {
  variants
})
