const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/main/aem-vue/components/**/*.{html,js,ts}"],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'sm-only': {'max': '767px'},
      'md-only': {'min': '768px', 'max': '1023px'},
      'lg-only': {'min': '1024px'},
    },
  },

  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm-only': {
            paddingLeft : '20px',
            paddingRight : '20px',
            
          },
          '@screen md-only': {
            paddingLeft : '20px',
            paddingRight : '20px',
  
          },
          '@screen lg': {
            paddingLeft : '20px',
            paddingRight : '20px',

          },
          '@screen xl': {
            paddingLeft : '0px',
            paddingRight : '0px',
            maxWidth: '1200px',
          },
        }
      })
    })
  ],
}

