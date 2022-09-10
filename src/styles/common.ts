import { getStylePropsFromToken } from './helpers'
import { config } from '../stitches.config'

const {
  theme: { colors }
} = config

type Colors = typeof colors

export const bgColor = getStylePropsFromToken<Colors>(colors)

export const display = {
  block: 'block',
  'inline-block': 'inline-block',
  inline: 'inline',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  'inline-grid': 'inline-grid',
  hidden: 'none'
}

export const position = {
  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky'
}

export const positionOptions = {
  top: '',
  right: '',
  left: '',
  bottom: ''
}

export const zIndex = {
  z0: '0',
  z10: '10',
  z20: '20',
  z30: '30',
  z40: '40',
  z50: '50',
  zAuto: 'auto'
}

export const maxWidth = {
  '0': '0rem',
  none: 'none',
  xs: '20rem' /* 320px */,
  sm: '24rem' /* 384px */,
  md: '28rem' /* 448px */,
  lg: '32rem' /* 512px */,
  xl: '36rem' /* 576px */,
  '2xl': '42rem' /* 672px */,
  '3xl': '48rem' /* 768px */,
  '4xl': '56rem' /* 896px */,
  '5xl': '64rem' /* 1024px */,
  '6xl': '72rem' /* 1152px */,
  '7xl': '80rem' /* 1280px */,
  full: '100%',
  wMin: 'min-content',
  wMax: 'max-content',
  wFit: 'fit-content'
}

export const minHeight = {
  '0': '0',
  none: 'none',
  full: '100%',
  screen: '100vh',
  hMin: 'min-content',
  hMax: 'max-content',
  hFit: 'fit-content'
}

export const opacity = {
  '0': '0',
  '5': '0.05',
  '10': '0.1',
  '20': '0.2',
  '25': '0.25',
  '30': '0.3',
  '40': '0.4',
  '50': '0.5',
  '60': '0.6',
  '70': '0.7',
  '75': '0.75',
  '80': '0.8',
  '90': '0.9',
  '95': '0.95',
  '100': '1'
}

const grid = {
  gridColumn: '',
  gridColumnEnd: '',
  gridColumnStart: '',
  gridRow: '',
  gridRowEnd: '',
  gridRowStart: '',
  justifySelf: '',
  alignSelf: ''
}

const flex = {
  flexBasis: '',
  flexGrow: '',
  flexShrink: ''
}

const size = {
  width: '',
  height: '',
  size: ''
}

const padding = {
  padding: '',
  paddingTop: '',
  paddingRight: '',
  paddingBottom: '',
  paddingLeft: '',
  paddingX: '',
  paddingY: ''
}

const margin = {
  margin: '',
  marginTop: '',
  marginRight: '',
  marginBottom: '',
  marginLeft: '',
  marginX: '',
  marginY: ''
}

export const layout = { ...margin, ...padding, ...size, ...grid, ...flex }
