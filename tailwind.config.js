/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
      screens: {
          xs: "540px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          lg_992: '992px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lexend: ['var(--font-lexend)'],
      },
      container: {
          center: true,
          padding: {
              DEFAULT: '12px',
              sm: '1rem',
              lg: '45px',
              xl: '5rem',
              '2xl': '13rem',
          },

      },
      extend: {
      
          boxShadow: {
              sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
              DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
              md: '0 5px 13px rgb(60 72 88 / 0.20)',
              lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
              xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
              '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
              inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
              testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
          },

          spacing: {
              0.75: '0.1875rem',
              3.25: '0.8125rem'
          },    

          maxWidth: ({
              theme,
              breakpoints
          }) => ({
              '1200': '71.25rem',
              '992': '60rem',
              '768': '45rem',
          }),
          colors: {
            "--main-color": "var(--main-color)",
            "--main-color-hover": "var(--main-color-hover)",
            "--darkest-grey-color": "var(--darkest-grey-color)",
            "--dark-grey-color": "var(--dark-grey-color)",
            "--dark-grey-color5f5c5d": "var(--dark-grey-color5f5c5d)",
            "--dark-grey-color787878": "var(--dark-grey-color787878)",
            "--dark-grey-color55565B": "var(--dark-grey-color55565B)",
            "--light-grey-color": "var(--light-grey-color)",
            "--light-grey-colorDBD9D1": "var(--light-grey-colorDBD9D1)",
  
          },
          zIndex: {
              1: '1',
              2: '2',
              3: '3',
              999: '999',
          },
      },
  },

  plugins: [
    require('autoprefixer'),
    require('tailwindcss-animated')
  ]

}