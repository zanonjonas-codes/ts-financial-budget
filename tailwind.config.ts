import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        cupcake: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['cupcake'],
          'neutral-content': '#A9AFB9',
        },
      },
    ],
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
