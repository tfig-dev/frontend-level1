import type { Config } from 'tailwindcss';

//const config: Config = {
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      //para adicionarmos cores
      colors: {
        text: '#373737',
        subtext: '#797979',
        sidebar: {
          category: '#E4E4E4',
          subcategory: '#a8a7a7',
          hover: '#58607c',
          hoversub: '#FFFFFF',
          selected: '#58607c',
          background: '#363D59',
          iconcolor: '#E4E4E4',
          textselected: '#FF0000',
        },
        forms: {
          title: '#33363F',
          label: '#33363F',
          border: '#00000033',
          borderInput: '#00000033',
          divider: '#767676',
          savebtn: '#363E59',
          hoversavebtn: '#595f75',
          cancelbtn: '#EDEDED',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
//export default config;
