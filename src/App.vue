<template>
  <ThemeProvider :theme="getTheme()" :style="{ minHeight: '100%' }">
    <router-view />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components"
import theme from "./assets/theme"

export default {
  name: "App",
  components: {
    ThemeProvider,
  },
  methods: {
    getTheme() {
      let myTheme = theme
      return myTheme
    },
  },
}
</script>
