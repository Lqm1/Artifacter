/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        //primary: {
          //100: "hsl(0 0% 97.6%)",
          //130: "hsl(220 13% 95.5%)",
          //160: "hsl(210 11.1% 92.9%)",
          //200: "hsl(216 9.8% 90%)",
          //230: 'hsl(210 9.1% 87.1%)', // text
          //260: "hsl(214 8.4% 83.7%)",
          //300: "hsl(210 9.3% 78.8%)",
          //330: 'hsl(215 8.8% 73.3%)',
          //345: 'hsl(214 8.4% 67.5%)', // text-sub
          //360: "hsl(214 8.1% 61.2%)",
          //400: "hsl(223 5.8% 52.9%)",
          //430: "hsl(229 4.8% 44.9%)",
          //460: "hsl(228 5.2% 38%)",
          //500: "hsl(228 6% 32.5%)",
          //530: 'hsl(227 6.5% 27.3%)',
          //560: 'hsl(225 6.7% 23.5%)', // border
          //600: 'hsl(223 6.7% 20.6%)',
          //630: 'hsl(220 6.5% 18%)', // neutral
          //645: "hsl(220 7% 16.9%)",
          //660: "hsl(228 6.7% 14.7%)",
          //700: 'hsl(225 6.3% 12.5%)',
          //730: 'hsl(225 7.1% 11%)', // base-bg
          //760: "hsl(220 6.4% 9.2%)",
          //800: "hsl(220 8.1% 7.3%)",
          //830: "hsl(240 4% 4.9%)",
          //860: "hsl(240 7.7% 2.5%)",
          //900: "hsl(0 0% 0.8%)",
        //},
        text: 'hsl(210 9.1% 87.1%)', // 230 check global-style
        "text-sub": 'hsl(214 8.4% 67.5%)', // 345
        border: 'hsl(225 6.7% 23.5%)', // 560
        background: 'hsl(225 7.1% 11%)', // 730 check global-style
        link: '#58a6ff', //'hsl(200 100% 49.4%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        paimon: {
          //primary: 'hsl(215 8.8% 73.3%)',
          //secondary: 'hsl(227 6.5% 27.3%)',
          //accent: 'hsl(200 100% 49.4%)', // --blue-345
          neutral: 'hsl(220 6.5% 18%)', // --primary-630
          'base-100': '#000',
        },
      },
    ],
  },
}
