<template>
  <ThemeProvider :theme="getTheme()" :style="{ minHeight: '100%', backgroundColor: '#EBECF1' }">
    <Navbar />
    <router-view />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components"
import Navbar from '@/components/Navbar/Navbar'
import theme from "./assets/theme"

export default {
  name: "App",
  components: {
    ThemeProvider,
    Navbar
  },
  methods: {
    getTheme() {
      let myTheme = theme
      return myTheme
    },
  },
}
</script>
