// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
   defaults: {
    VRadio: {
      // set v-radio default color to primary
      color: 'primary',
    },
    VCheckbox: {
       color: 'primary',
    }
  },
})
