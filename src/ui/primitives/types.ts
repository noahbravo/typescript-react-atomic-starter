import { CSSProperties } from 'react'
import { breakpoints } from '../../styles'
import { layout } from '../../styles/common'

export type CSS = CSSProperties | Record<string, CSSProperties>

export type CustomStyleProp = string | number

type BreakpointProps<T, B> = {
  [b in keyof B]?: T
}

type PrimitivePropsTypes<P, C, B> = {
  [k in keyof P]?: P[k] extends Record<string, string>
    ? keyof P[k] | Array<keyof P[k] | null> | BreakpointProps<keyof P[k], B>
    : C | Array<keyof P[k] | null> | BreakpointProps<keyof C, B>
}

export interface LayoutAndCSSProps
  extends PrimitivePropsTypes<typeof layout, CustomStyleProp, typeof breakpoints> {
  css?: CSS
}

export type PrimitiveProps<T> = PrimitivePropsTypes<T, CustomStyleProp, typeof breakpoints> &
  LayoutAndCSSProps
