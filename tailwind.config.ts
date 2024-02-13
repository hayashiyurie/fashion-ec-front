import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'red-bean': {
            100 : '#E0E0E0', //全ページのbgColor
            200 : '#D9D9D9', //検索入力部分, cartボタン, + -
            300 : '#C4C2C2', //cartのbg
            400 : '#AB9F9F', //headerのbg, genreボタン
            500 : '#9C7C7C', //headerの中のbg
            600 : '#908B8B', //sizeボタン
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        sansilk: ['sansilk'],//筆記体
        FRIZON: ['FRIZON'],//良い
        chillax: ['chillax'],//太
        Lexend: ['Lexend'], //普通
        Chillax: ['Chillax Variable'],//うーん
      },
    },
  },
  plugins: [],
  
}
export default config
