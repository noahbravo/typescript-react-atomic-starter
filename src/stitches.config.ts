import { createStitches } from '@stitches/react'

type Value = string

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        teal: '#0098a8',
        black: '#000',
        white: '#fff'
      },
      fonts: {
        primary: 'Helvetica, Arial, sans-serif'
      },
      fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.5rem', // 24px
        '2xl': '1.875rem', // 30px
        '3xl': '4rem' // 64px
      }
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1536px)'
    },
    utils: {
      marginX: (value: Value) => ({
        marginLeft: value,
        marginRight: value
      }),
      marginY: (value: Value) => ({
        marginTop: value,
        marginBottom: value
      }),
      paddingX: (value: Value) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      paddingY: (value: Value) => ({
        paddingTop: value,
        paddingBottom: value
      }),
      size: (value: Value) => ({
        width: value,
        height: value
      }),
      borderX: (value: Value) => ({
        borderLeft: value,
        borderRight: value
      }),
      borderY: (value: Value) => ({
        borderTop: value,
        borderBottom: value
      })
    }
  })
