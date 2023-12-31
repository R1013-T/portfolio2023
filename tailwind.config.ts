import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-1': '#2C2C2C',
        'black-2': '#47585C',
        'white-1': '#FAFAFA',
        'white-2': '#F8FAFC',
        'white-3': '#E7F7F9',
        'white-4': '#EDEDED',
      },
      height: {
        dvh: '100dvh',
      },
      minHeight: {
        1: '15rem',
      },
      maxWidth: {
        100: '40rem',
      },
      scale: {
        120: '1.2',
      },
    },
  },
  plugins: [],
}
export default config
