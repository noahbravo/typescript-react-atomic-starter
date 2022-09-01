import type { Breakpoints, CSS, CustomStyleProp } from '../../styles/types'
import type { ObjectTypeWithUnionsAndTuples } from '../../utils/types'
import { layout } from '../../styles/common'

export interface LayoutAndCSSProps
  extends ObjectTypeWithUnionsAndTuples<typeof layout, CustomStyleProp, Breakpoints> {
  css?: CSS
}

export type PrimitiveProps<T> = ObjectTypeWithUnionsAndTuples<T, CustomStyleProp, Breakpoints> &
  LayoutAndCSSProps
