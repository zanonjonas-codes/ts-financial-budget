import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ['cupcake'],
  },

  plugins: [require('daisyui')],
  themeRoot: '*',
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/static/background_login.jpg')",
      },
    },
  },
}
export default config
