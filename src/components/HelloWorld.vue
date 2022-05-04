<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> 
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="n in 3"
            :key="n"
            :label="`Radio ${n}`"
            :value="n"
          ></v-radio>
        </v-radio-group>

        <v-radio label="Single"></v-radio>

        <v-checkbox label="Checkbox"></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    logo,
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
    radioGroup: 1,
  }),
}
</script>
