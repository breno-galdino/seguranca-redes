import { createVuetify} from 'vuetify'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customPlus",
    themes: {
      customPlus: {
        dark: false,
        colors: {
          primary: "#0e5a3c",
          secondary: "#fecd08", 
          accent: "#D3D3D3", 
          success: "#3f8255",
          warning: "#dfb256",
          error: "#c6453a",
          info: "#222",
        },
      },
      customPlusDark: {
        dark: true,
        colors: {
          primary: "#FFFFFF",
          secondary: "#113311",
          accent: "#0F0F0F",
          success: "#44AA44",
          warning: "#FFCC66",
          error: "#FF6666",
          info: "#113344",
        },
      },
    },
  },
})

  nuxtApp.vueApp.use(vuetify)
})