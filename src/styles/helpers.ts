import { config } from '../stitches.config'

const { theme } = config

type Theme = typeof theme
type Tokens = { [k in keyof Theme]: keyof Theme[k] }

export function getStylePropsFromTheme(tokenName: keyof typeof theme) {
  const token = theme[tokenName]

  type TokenType = Tokens[typeof tokenName]
  type TokenTPropsType = Record<TokenType, string>

  return Object.keys(token).reduce<TokenTPropsType>((acc, key) => {
    const tokenKey = key as TokenType
    acc[tokenKey] = `$${key}`
    return acc
  }, {} as TokenTPropsType)
}

export function toRem(px: number, rootFontSize = 16) {
  return `${px / rootFontSize}rem`
}
