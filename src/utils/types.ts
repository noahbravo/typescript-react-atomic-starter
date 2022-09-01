// adapted from https://stackoverflow.com/a/70089226/9641317
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never
type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>
type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never

type UnionCount<U, L extends any[] = []> = {
  0: PopUnion<U> extends infer SELF ? UnionCount<Exclude<U, SELF>, [any, ...L]> : never
  1: L['length']
}[[U] extends [never] ? 1 : 0]

type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : Partial<_TupleOf<T, N, []>>
  : never

type EnumLength<T> = UnionCount<T>

export type ObjectTypeWithUnionsAndTuples<P, C, E> = {
  [k in keyof P]?: P[k] extends Record<string, string>
    ? keyof P[k] | Tuple<keyof P[k] | null, EnumLength<E>>
    : C | Tuple<C | undefined | null, EnumLength<E>>
}
