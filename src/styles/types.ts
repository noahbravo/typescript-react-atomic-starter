import { CSSProperties } from 'react'

export enum Breakpoints {
  xs,
  sm,
  md,
  lg,
  xl,
  '2xl'
}

export type CSS = CSSProperties | Record<string, CSSProperties>

export type CustomStyleProp = string | number
