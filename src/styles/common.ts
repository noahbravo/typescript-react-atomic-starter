import { getStylePropsFromTheme } from './helpers'

export const bgColor = getStylePropsFromTheme('colors')

export const fontSize = getStylePropsFromTheme('fontSizes')

export const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normalCase: 'none'
}

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

const margin = {
  margin: '',
  marginTop: '',
  marginRight: '',
  marginBottom: '',
  marginLeft: '',
  marginX: '',
  marginY: ''
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

export const layout = { ...margin, ...padding, ...size, ...grid, ...flex }
