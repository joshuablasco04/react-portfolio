/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px'
    },
    extend: {},
  },
    plugins: [
        require('flowbite/plugin')
    ]
}