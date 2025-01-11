import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
    },
    VBtn: { variant: 'flat' },
  },
  theme: {},
})
